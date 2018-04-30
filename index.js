const Hapi = require('hapi')
const routes = require('./setup/rotues')
const Inert = require('inert')
const Vision = require('vision')
const swaggerPlugin = require('./setup/swagger')
const sequelizeSetup = require('./setup/sequelize')

const server = Hapi.server({
  port: 3000,
  host: 'localhost',
  debug: { log: ['*'], request: ['*'] },
})

server.register([
  Inert,
  Vision,
  swaggerPlugin,
  sequelizeSetup,
  ...routes,
])
  .then(()=>server.start())
  .then(() => {
    console.log(`server running at: ${server.info.uri}`)
  })