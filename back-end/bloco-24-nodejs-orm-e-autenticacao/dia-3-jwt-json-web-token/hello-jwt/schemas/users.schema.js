const Joi = require('joi');

const usersSchema = Joi.object({
  username: Joi.string().min(5).regex(/^[a-zA-Z0-9,. ]*$/).required()
    .messages({
      'string.min': '422|"username" length must be 5 characters long',
      'string.required': '400|"username" is required'
    }),
  password: Joi.string().min(5).required()
    .messages({
      'string.min': '422|"password" length must be 5 characters long',
      'string.required': '400|"password" is required'
    })
});

module.exports = usersSchema;