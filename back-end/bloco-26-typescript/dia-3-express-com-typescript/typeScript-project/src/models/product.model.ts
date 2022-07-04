import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import { IAddProduct, IProduct, IProductsList } from '../interfaces/index.interfaces';

export default class ProductModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public create = async (product: IAddProduct): Promise<IProduct> => {
    const { name, amount } = product;
    const QUERY = 'INSERT INTO Products (name, amount) VALUES (?, ?);';
    const [result] = await this.connection.execute<ResultSetHeader>(QUERY, [name, amount]);
    
    return {
      item: {
        id: result.insertId,
        name,
        amount,
      }
    };
  }

  public getAll = async (): Promise<IProductsList[]> => {
    const QUERY = 'SELECT * FROM Products;';
    const [result] = await this.connection.execute<RowDataPacket[]>(QUERY);

    return result as IProductsList[];
  }

  public getById = async (id: number): Promise<IProductsList> => {
    const QUERY = 'SELECT * FROM Products WHERE id=?;';
    const [[result]] = await this.connection.execute<RowDataPacket[]>(QUERY, [id]);

    return result as IProductsList;
  }

  public update = async (id: number, product: IAddProduct): Promise<void> => {
    const { name, amount } = product;
    const QUERY = 'UPDATE Products SET name=?, amount=? WHERE id=?;';
    await this.connection.execute<RowDataPacket[]>(QUERY, [name, amount, id]);
  }

  public remove = async (id: number): Promise<void> => {
    const QUERY = 'DELETE FROM Products WHERE id=?;';
    await this.connection.execute<RowDataPacket[]>(QUERY, [id]);
  }
}