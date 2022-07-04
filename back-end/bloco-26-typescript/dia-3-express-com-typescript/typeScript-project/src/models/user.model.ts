import { Pool, RowDataPacket, ResultSetHeader } from 'mysql2/promise';
import { IUser } from '../interfaces/index.interfaces';

export default class UserModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public create = async (user: IUser): Promise<IUser> => {
    const { username, classe, level, password } = user;
    const QUERY = 'INSERT INTO Users (username, classe, level, password) VALUES (?, ?, ?, ?);';
    const [result] = await this.connection.execute<ResultSetHeader>(QUERY, [username, classe, level, password]);

    return {
      id: result.insertId,
      username,
      classe,
      level,
      password,
    };
  }

  public getAll = async (): Promise<IUser[]> => {
    const QUERY = 'SELECT * FROM Users;';
    const [result] = await this.connection.execute<RowDataPacket[]>(QUERY);
  
    return result as IUser[];
  }

  public update = async (id: number, user: IUser): Promise<void> => {
    const { username, classe, level, password } = user;
    const QUERY = 'UPDATE Users SET username=?, classe=?, level=?, password=? WHERE id=?;';
    await this.connection.execute<RowDataPacket[]>(QUERY, [username, classe, level, password, id]);
  }

  public delete = async (id: number): Promise<void> => {
    const QUERY = 'DELETE FROM Users WHERE id=?;';
    await this.connection.execute<RowDataPacket[]>(QUERY, [id]);
  }
}
