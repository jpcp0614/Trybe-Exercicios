import { Request, Response, NextFunction } from 'express';
import { orderSchema } from '../schemas/index.schema';
import { IAddOrder } from '../interfaces/index.interfaces';

export const validateOrder = (req: Request, _res: Response, next: NextFunction) => {
  const order: IAddOrder = req.body;
  const { error } = orderSchema.validate(order);

  if (error) {
    const [status, message] = error.message.split('|');
    const objError = { status: Number(status), message };
    next(objError);
  }
  next();
}