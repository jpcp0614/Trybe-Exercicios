import { Request, Response, NextFunction } from 'express';
import { loginSchema } from '../schemas/login.schema';
import { IUser } from '../interfaces/index.interfaces';

export const validateLogin = (req: Request, res: Response, next: NextFunction) => {
  const user: IUser = req.body;
  const { error } = loginSchema.validate(user);

  if (error) {
    const [status, message] = error.message.split('|');
    const objError = { status: Number(status), message };
    next(objError);
  }
  next();
}