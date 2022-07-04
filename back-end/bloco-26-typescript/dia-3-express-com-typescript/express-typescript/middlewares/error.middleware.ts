import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';

export const MiddlewareError = (error: Error, _req: Request, res: Response, next: NextFunction) => {
  const { name, message, details } = error as any;
  console.log(`name: ${name}`);

  switch (name) {
    case 'ValidationError':
      return res.status(StatusCodes.BAD_REQUEST).json({ message: details[0].message });
      break;
    case 'NotFoundError':
      return res.status(StatusCodes.NOT_FOUND).json({ message });
    case 'ConflictError':
      return res.status(StatusCodes.CONFLICT).json({ message });
    default:
      console.log(error);
      return res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
  }

  next();
};