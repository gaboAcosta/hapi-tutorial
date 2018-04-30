
const _ = require('lodash')
const defaultConf = require('./default')
const environment = defaultConf.env
const envConfigPath = `./env/${environment}`
const envConfig = require(envConfigPath)

module.exports = _.merge(defaultConf, envConfig)
