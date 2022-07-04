import BookService from "../services/books.services";
import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';

export default class BookController {
  private service: BookService;

  constructor() {
    this.service = new BookService();
  }

  public getAll = async (_req: Request, res: Response, next: NextFunction) => {
    const books = await this.service.getAll();

    return res.status(StatusCodes.OK).json(books);
  }

  public getById = async (req: Request, res: Response, _next: NextFunction) => {
    const { id } = req.params;

    const book = await this.service.getById(+id);
    
    if (!book) {
      return res.status(StatusCodes.NOT_FOUND).json({ message: 'Book not found' });
    }

    return res.status(StatusCodes.OK).json(book);
  }

  public create = async (req: Request, res: Response, _next: NextFunction) => {
    const { title, price, author, isbn } = req.body;

    const newBook = await this.service.create({ title, price, author, isbn });

    return res.status(StatusCodes.CREATED).json(newBook);
  }

  public update = async (req: Request, res: Response, _next: NextFunction) => {
    const { id } = req.params;
    const { title, price, author, isbn } = req.body;

    await this.service.update(+id, { title, price, author, isbn });

    return res.status(StatusCodes.OK).json({ message: `Book with id=${id} successfully updated!` });
  }

  public remove = async (req: Request, res: Response, _next: NextFunction) => {
    const { id } = req.params;

    await this.service.remove(+id);

    return res.status(StatusCodes.OK).json({ message: `Book with id=${id} successfully removed!` });
  }
}