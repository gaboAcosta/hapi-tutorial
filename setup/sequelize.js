const Glob = require('glob')
const config = require('../config')
const Sequelize = require('sequelize')

const sequelizeSetup = {
  name: 'sequelizeSetup',
  version: '1.0.0',
  async register(server, options, next) {
    const dbConfig = config.db
    const { database } = dbConfig
    const { username } = dbConfig
    const { password } = dbConfig
    const { dialect } = dbConfig
    const { storage } = dbConfig
    const { host } = dbConfig

    console.log(`Connecting to db on host ${host}`)

    let sequelize
    if(config.env === 'development'){
      sequelize = new Sequelize(database, null, null, { dialect, storage })
    } else {
      sequelize = new Sequelize(database, username, password, { dialect, host })
    }

    await sequelize.authenticate()
    console.log('Connection has been established successfully.');


    const models = {}

    Glob.sync('../src/**/*.model.js', {
      realpath: true,
      cwd: __dirname
    })
    .forEach((file) => {
      const model = sequelize['import'](file)
      models[model.name] = model
    })

    // Associate models
    Object.keys(models).forEach((modelName) => {
      if(models[modelName].associate) {
        models[modelName].associate(models)
      }
    })

    server.decorate('server', 'db', { models, sequelize})


  }
}


module.exports = sequelizeSetup
