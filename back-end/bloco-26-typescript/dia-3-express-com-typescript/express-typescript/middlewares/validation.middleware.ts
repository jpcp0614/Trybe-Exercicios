import { StatusCodes } from 'http-status-codes';
import Book from '../interfaces/book.interface';
import { Request, Response, NextFunction } from 'express';

const properties = ['title', 'price', 'author', 'isbn'];

const validateProperties = (book: Book): [boolean, string | null] => {
  for (let i = 0; i < properties.length; i++) {
    if (!Object.prototype.hasOwnProperty.call(book, properties[i])) {
      return [false, properties[i]];
    }
  }
  return [true, null];
}

const validateValues = (book: Book): [boolean, string | null] => {
  const entries = Object.entries(book);
  for (let i = 0; i < entries.length; i++) {
    const [property, value] = entries[i];
    if (!value) {
      return [false, property];
    }
  }
  return [true, null];
}

export const validateBook = (req: Request, res: Response, next: NextFunction) => {
  const book: Book = req.body;
  
  let [valid, property] = validateProperties(book);

  if (!valid) {
    return res.status(StatusCodes.BAD_REQUEST)
      .json({ message: `O campo ${property} é obrigatório.` })
  }

  [valid, property] = validateValues(book);

  if (!valid) {
    return res.status(StatusCodes.BAD_REQUEST)
      .json({ message: `O campo ${property} não pode ser nulo ou vazio.` })
  }

  next();
}