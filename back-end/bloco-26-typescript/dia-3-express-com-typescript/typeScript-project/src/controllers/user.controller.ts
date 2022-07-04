import { UserService } from '../services/index.services';
import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import { IUser, IPayload } from '../interfaces/index.interfaces';
import { generateToken } from '../helpers/tokenGenerate';

export default class UserController {
  private service: UserService;

  constructor() {
    this.service = new UserService();
  }

  public create = async (req: Request, res: Response, _next: NextFunction) => {
    const user: IUser = req.body;
    const createdUser = await this.service.create(user);
    
    const payload: IPayload = {
      id: createdUser.id,
      username: createdUser.username,
    }
    
    const token = generateToken(payload);
    
    return res.status(StatusCodes.CREATED).json({ token });
  }

  public getAll = async (_req: Request, res: Response, _next: NextFunction) => {
    const users = await this.service.getAll();

    return res.status(StatusCodes.OK).json(users);
  }

  public update = async (req: Request, res: Response, _next: NextFunction) => {
    const id: number = +req.params.id;
    const user: IUser = req.body;
    
    await this.service.update(id, user);

    return res.status(StatusCodes.OK).json({ message: `User with id=${id} successfully updated!` });
  }

  public delete = async (req: Request, res: Response, _next: NextFunction) => {
    const id: number = +req.params.id;

    await this.service.delete(id);

    return res.status(StatusCodes.OK).json({ message: `User with id=${id} successfully deleted!` });
  }
}