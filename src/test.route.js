
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
        async handler(req){
          const { db } = server
          const { name } = req.payload
          const model = db.models['sample']
          const sample = await model.create({ name })

          //If you return the model Hapi freaks out, so we return JSON
          return sample.get({ plain: true })
        },
        response: {
          modify: true,
          options: {
            stripUnknown: true,
          },
          schema: Joi.object().keys({
            id: Joi.number().required(),
            name: Joi.string().required()
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