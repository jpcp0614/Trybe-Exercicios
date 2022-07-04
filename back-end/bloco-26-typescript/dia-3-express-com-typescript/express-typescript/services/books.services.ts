import connection from '../models/connection';
import BookModel from '../models/book.model';
import Book from '../interfaces/book.interface';
import { NotFoundError, ConflictError } from 'restify-errors';

export default class BookService {
  public model: BookModel;

  constructor() {
    this.model = new BookModel(connection);
  }

  public getAll = async (): Promise<Book[]> => {
    const books = await this.model.getAll();

    return books;
  }

  public getById = async (id: number): Promise<Book> => {
    const book = await this.model.getById(id);

    return book;
  }

  public create = async (book: Book): Promise<Book> => {
    const books = await this.model.getAll();
    const booksFilter = books.filter(b => b.title === book.title);
    if (booksFilter.length > 0) {
      throw new ConflictError('Book already exists');
    }

    const newBook = await this.model.create(book);

    return newBook;
  }

  public update = async (id: number, book: Book): Promise<void> => {
    const bookFound = await this.model.getById(id)
    if (!bookFound) {
      throw new NotFoundError('Book not found');
    }
    
    await this.model.update(id, book);
  }

  public remove = async (id: number) => {
    const bookFound = await this.model.getById(id)
    if (!bookFound) {
      throw new NotFoundError('Book not found');
    }

    await this.model.remove(id);
  }
}