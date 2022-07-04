import Joi from 'joi';

export const orderSchema = Joi.object({
  products: Joi.array().items(Joi.number()).required().min(1).messages({
    'array.base': '422|Products must be an array of numbers',
    'any.required': '400|Products is required',
    'array.min': '422|Products can\'t be empty',
  }),
});