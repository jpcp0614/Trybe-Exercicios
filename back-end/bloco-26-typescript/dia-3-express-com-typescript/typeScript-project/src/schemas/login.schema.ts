import Joi from 'joi';

export const loginSchema = Joi.object({
  username: Joi.string().required().min(3).messages({
    'string.base': '422|Username must be a string',
    'any.required': '400|Username is required',
    'string.min': '422|Username must be longer than 2 characters',
  }),
  password: Joi.string().required().min(8).messages({
    'string.base': '422|Password must be a string',
    'any.required': '400|Password is required',
    'string.min': '422|Password must be longer than 7 characters',
  }),
});