const Hapi = require('hapi')
const routes = require('./setup/rotues')

const server = Hapi.server({
  port: 3000,
  host: 'localhost',
  debug: { log: ['*'], request: ['*'] },
})

server.register(routes)
  .then(()=>server.start())
  .then(() => {
    console.log(`server running at: ${server.info.uri}`)
  })