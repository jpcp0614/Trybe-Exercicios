import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { IPayload } from '../interfaces/index.interfaces';
import { UnauthorizedError } from 'restify-errors';
import dotenv from 'dotenv';

dotenv.config();

const JWT_SECRET: any = process.env.JWT_SECRET;

export const auth = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;

  if(!token) {
    throw new UnauthorizedError('Token not found');
  }

  try {
    const decodedToken = jwt.verify(token, JWT_SECRET);
    const { id } = decodedToken as IPayload;
    req.body = { userId: id, ...req.body };

    next();
  } catch (error) {
    console.log(error);
    throw new UnauthorizedError('Invalid token');
  }
}