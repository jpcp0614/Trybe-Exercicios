import { Pool, RowDataPacket } from 'mysql2/promise';
import { IUser } from '../interfaces/index.interfaces';

export default class LoginModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public login = async (user: IUser): Promise<IUser[]> => {
    const { username, password } = user;
    const QUERY = 'SELECT * FROM Users WHERE username = ? AND password = ?;';
    const [result] = await this.connection.execute<RowDataPacket[]>(QUERY, [username, password]);

    return result as IUser[];
  }
}