
const memoizee = require('memoizee');
const swagger = require('swagger-client');
const utils = require('./utils');
const schemaType = require('./CONST').schemaType;
const successCode = require('./CONST').successCode;
const dataType = require('./CONST').dataType;

function genExample (schema) {
  schema = utils.initObject(schema);
  let { type, properties, items, additionalProperties} = schema
  if(!type) {
    if(properties) {
      type = schemaType.OBJECT
    } else if(items) {
      type = schemaType.ARRAY
    } else {
      return
    }
  }

  let res;
  switch(type) {
    case schemaType.OBJECT:
      const props = utils.initObject(properties)
      res = {}
      Object.keys(props).map((key) => {
        const { items } = props[key];
        /** 树结构数据声成两层数据 */
        if(items && items['$ref'] && items['$ref'].substr(14) === schema.title){
          props[key].items = {
            type: schema.type,
            properties: {
              ...props,
              [key]: {}
            }
          }
        }
        res[key] = genExample(props[key])
      })
      break;
    case schemaType.ARRAY:
      res = [genExample(items)]
      break;
  }

  if (schema['enum']) {
    if (schema['default']) return schema['default'];
    return utils.isArray(schema['enum'])?schema['enum'][0]:schema['enum']
  }

  return res.example || dataType[type]

}
const memoizedExample = memoizee(genExample);

function parser(url, options) {
  options = options || {}

  if(utils.isObject(url)) {
    options = url
  } else if(utils.isString(url)) {
    options.url = url
  }

  return swagger(options).then((res) => {
    const {spec = {}} = res
    const paths = Object.keys(spec.paths)
    paths.map((path) => {
      const methods = Object.keys(spec.paths[path])
      methods.map((method) => {
        const api = spec.paths[path][method]
        api.responses = api.responses || {}
        api.parameters = api.parameters || {}
        Object.keys(api.responses).map((code) => {
          const response = api.responses[code]
          const schema = utils.transferSchema(response);
          const example = schema ? memoizedExample(schema) : null
          let flag = api.parameters && !!api.parameters.filter(
            item =>
              item.name === 'pageNum' || item.name === 'pageNo'
          ).length
          response.example = JSON.stringify({
            errcode: successCode,
            data: flag ? {
              currentPage: 0,
              count: 1,
              data: utils.isArray(example)?example:[example]
            } : example
          }, null, 2)
        })
        Object.keys(api.parameters).map((key) => {
          const param = api.parameters[key]
          schema = utils.inferSchema(param);
          param.example = schema ? JSON.stringify(memoizedExample(schema), null, 2) : null
        })
      })
    })
    return spec
  })
}

module.exports = parser