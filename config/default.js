
const path = require('path')

module.exports = {
  env: process.env.NODE_ENV || 'development',
  db: {
    database: 'hapi',
    dialect: 'sqlite',
    storage: path.resolve(path.join(__dirname, '..', 'hapi.sqlite'))
  }
}
