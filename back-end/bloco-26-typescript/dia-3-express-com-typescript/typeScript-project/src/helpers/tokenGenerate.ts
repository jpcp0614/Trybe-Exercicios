import jwt, { SignOptions } from 'jsonwebtoken';
import { IPayload } from '../interfaces/index.interfaces';
import dotenv from 'dotenv';

dotenv.config();

const JWT_SECRET: any = process.env.JWT_SECRET;

const jwtConfig: SignOptions = { // ref.: 1
  expiresIn: '5d',
  algorithm: 'HS256',
};

export const generateToken = (payload: IPayload): string => {
  const token: string = jwt.sign(payload, JWT_SECRET, jwtConfig);

  return token;
}

//* 1) https://www.becomebetterprogrammer.com/jwt-authentication-middleware-nodejs-typescript/