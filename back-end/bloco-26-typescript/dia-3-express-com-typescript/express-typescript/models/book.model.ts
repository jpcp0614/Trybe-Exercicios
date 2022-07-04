import { Pool, RowDataPacket, ResultSetHeader } from 'mysql2/promise';
import Book from '../interfaces/book.interface';

export default class BookModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public getAll = async (): Promise<Book[]> => {
    const QUERY = 'SELECT * FROM books;'
    const [result] = await this.connection.execute<RowDataPacket[]>(QUERY);

    return result as Book[];
  }

  public getById = async (id: number): Promise<Book> => {
    const QUERY = 'SELECT * FROM books WHERE id=?;';
    const result = await this.connection.execute<RowDataPacket[]>(QUERY, [id]);

    // const [rows] = result;
    // console.log('primeira parte:\n', [rows]);
    // const [book] = rows as Book[];
    // console.log('segunda parte:\n', [book]);
    // return book;

    return result[0][0] as Book;
  }

  public create = async (book: Book): Promise<Book> => {
    const {title, price, author, isbn} = book;
    const QUERY = 'INSERT INTO books (title, price, author, isbn) VALUES (?, ?, ?, ?);';
    const [result] = await this.connection.execute<ResultSetHeader>(QUERY, [title, price, author, isbn]);

    return {
      id: result.insertId,
      title,
      price,
      author,
      isbn,
    };
  }

  public update = async (id: number, book: Book): Promise<void> => {
    const {title, price, author, isbn} = book;
    const QUERY = 'UPDATE books SET title=?, price=?, author=?, isbn=? WHERE id=?;';
    await this.connection.execute<ResultSetHeader>(QUERY, [title, price, author, isbn, id]);

    // return {
    //   id,
    //   title,
    //   price,
    //   author,
    //   isbn,
    // };
  }

  public remove = async (id: number): Promise<void> => {
    const QUERY = 'DELETE FROM books WHERE id=?;';
    await this.connection.execute<ResultSetHeader>(QUERY, [id]);
  }
}

