
const Pack = require('../package')
const HapiSwagger = require('hapi-swagger')

const options = {
  info: {
    'title': 'My API Documentation',
    'version': Pack.version
  }
}

module.exports = {
  plugin: HapiSwagger,
  options: options
}
