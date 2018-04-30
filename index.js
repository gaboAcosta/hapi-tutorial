const Hapi = require('hapi')

const server = Hapi.server({
  port: 3000,
  host: 'localhost',
  debug: { log: ['*'], request: ['*'] },
})

server.route({
  method: 'GET',
  path: '/',
  handler(){
    return 'Hello World!'
  }
})


server.start()
.then(() => {
  console.log(`server running at: ${server.info.uri}`)
})