const Joi = require('@hapi/joi')

const authschema = Joi.object({
    email:Joi.string().min(3).email().lowercase().required(),
    password: Joi.string().min(2).required(),
})

module.exports = {
    authschema,
}