const isObject = require('lodash/isObject');
const isString = require('lodash/isString');
const isArray = require('lodash/isArray');

function transferSchema(res) {
  if(res.schema) {
    res = res.schema
  }

  if (res.properties) {
    res.type = 'object'
  }

  return res
}

function initObject(initial) {
  return !isObject(initial)?{}:initial
}

module.exports = {
  transferSchema,
  isObject,
  isString,
  initObject,
  isArray
}