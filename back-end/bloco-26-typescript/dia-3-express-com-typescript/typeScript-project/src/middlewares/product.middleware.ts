import { Request, Response, NextFunction } from 'express';
import { productSchema } from '../schemas/index.schema';
import { IAddProduct } from '../interfaces/index.interfaces';

export const validateProduct = (req: Request, _res: Response, next: NextFunction) => {
  const product: IAddProduct = req.body;
  const { error } = productSchema.validate(product);

  if (error) {
    const [status, message] = error.message.split('|');
    const objError = { status: Number(status), message };
    next(objError);
  }
  next();
}