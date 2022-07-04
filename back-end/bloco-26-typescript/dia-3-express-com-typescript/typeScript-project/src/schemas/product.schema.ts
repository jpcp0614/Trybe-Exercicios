import Joi from 'joi';

export const productSchema = Joi.object({
  name: Joi.string().required().min(3).messages({
    'string.base': '422|Name must be a string',
    'any.required': '400|Name is required',
    'string.min': '422|Name must be longer than 2 characters',
  }),
  amount: Joi.string().required().min(3).messages({
    'string.base': '422|Amount must be a string',
    'any.required': '400|Amount is required',
    'string.min': '422|Amount must be longer than 2 characters',
  }),
});