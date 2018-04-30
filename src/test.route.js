
const Joi = require('joi')

module.exports = {
  name: 'rootRoute',
  version: '1.0.0',
  register(server) {
    server.route({
      method: 'POST',
      path: '/',
      config: {
        tags:['api'],
        handler(req){
          const { name } = req.payload
          return {
            message: `Hello ${name}!!`,
          }
        },
        response: {
          modify: true,
          options: {
            stripUnknown: true,
          },
          schema: Joi.object().keys({
            message: Joi.string()
          })
        },
        validate: {
          payload: Joi.object().keys({
            name: Joi.string().required()
          }),
        }
      }
    })
  }
}