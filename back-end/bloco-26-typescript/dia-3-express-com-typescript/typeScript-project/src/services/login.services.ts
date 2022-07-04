import { connection, LoginModel } from '../models/index.model';
import { IUser } from '../interfaces/index.interfaces';
import { UnauthorizedError } from 'restify-errors';

export default class LoginService {
  public model: LoginModel;

  constructor() {
    this.model = new LoginModel(connection);
  }

  public login = async (user: IUser): Promise<IUser[]> => {
    const users = await this.model.login(user);

    if (users.length === 0) {
      throw new UnauthorizedError('Username or password invalid');
    }

    return users as IUser[];
  }
}