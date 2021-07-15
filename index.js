const object = require('./src/object')
const array = require('./src/array')
const performance = require('./src/performance')

const Cookie = require('./src/cookie')

module.exports = {
  ...object,
  ...array,
  ...performance,
  Cookie
}