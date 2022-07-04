import { connection, UserModel } from '../models/index.model';
import { IUser } from '../interfaces/index.interfaces';
import { NotFoundError, ConflictError } from 'restify-errors';

export default class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public create = async (user: IUser): Promise<IUser> => {
    const users = await this.model.getAll();
    const usersFilter = users.filter(u => u.username === user.username);
    
    if (usersFilter) {
      throw new ConflictError(`User already exists`);
    }

    const createdUser = await this.model.create(user);

    return createdUser;
  }

  public getAll = async (): Promise<IUser[]> => {
    const users = await this.model.getAll();

    if (users.length === 0) {
      throw new NotFoundError(`Users not found`);
    }

    const usersMap = users.map(item => (
      {
        id: item.id,
        username: item.username,
        classe: item.classe,
      }
    ))

    return usersMap as IUser[];
  }

  public update = async (id: number, user: IUser): Promise<void> => {
    const users = await this.model.getAll();
    const usersFilter = users.filter(u => u.id === id);

    if (usersFilter.length === 0) {
      throw new NotFoundError(`User not found`);
    }

    await this.model.update(id, user);
  }

  public delete = async (id: number): Promise<void> => {
    const users = await this.model.getAll();
    const usersFilter = users.filter(u => u.id === id);

    if (usersFilter.length === 0) {
      throw new NotFoundError(`User not found`);
    }

    await this.model.delete(id);
  }

}