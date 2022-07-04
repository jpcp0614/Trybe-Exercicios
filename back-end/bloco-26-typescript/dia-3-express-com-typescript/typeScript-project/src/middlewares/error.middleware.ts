import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import { IError } from '../interfaces/index.interfaces';

export const middlewareError = (error: IError, req: Request, res: Response, next: NextFunction) => {
  const { status, name, message } = error as IError;

  switch (status || name) {
    case 400:
      res.status(StatusCodes.BAD_REQUEST).json({ 'error': message });
      break;
    case 'NotFoundError':
      res.status(StatusCodes.NOT_FOUND).json({ 'error': message });
      break;
    case 'ConflictError':
      res.status(StatusCodes.CONFLICT).json({ 'error': message });
      break;
    case 'UnauthorizedError':
      res.status(StatusCodes.UNAUTHORIZED).json({ 'error': message });
      break;
    case 422:
      res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({ 'error': message });
      break;
    default:
      console.log(error);
      return res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
  }

  next();
}