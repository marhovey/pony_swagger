const schemaType = {
  OBJECT: 'object',
  ARRAY: 'array',
  STRING: 'string',
}

const successCode = 0

const dataType = {
  'string': '@string',
  'number': '@integer(60, 100)',
  'integer': '@integer(60, 100)',
  'boolean': '@boolean'
}

module.exports = {
  schemaType,
  successCode,
  dataType
}