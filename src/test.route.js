
module.exports = {
  name: 'rootRoute',
  version: '1.0.0',
  register(server) {
    server.route({
      method: 'GET',
      path: '/',
      handler(){
        return 'Hello World!'
      }
    })
  }
}