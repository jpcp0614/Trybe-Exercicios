import { Request, Response, NextFunction } from 'express';
import { userSchema } from '../schemas/user.schema';
import { IUser } from '../interfaces/index.interfaces';

export const validateUser = (req: Request, res: Response, next: NextFunction) => {
  const user: IUser = req.body;
  const { error } = userSchema.validate(user);

  if (error) {
    const [status, message] = error.message.split('|');
    const objError = { status: Number(status), message };
    next(objError);
  }
  next();
}
