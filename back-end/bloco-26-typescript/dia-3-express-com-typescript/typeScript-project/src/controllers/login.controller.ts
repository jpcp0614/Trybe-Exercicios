import { LoginService } from '../services/index.services';
import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import { IUser, IPayload } from '../interfaces/index.interfaces';
import { generateToken } from '../helpers/tokenGenerate';

export default class LoginController {
  private service: LoginService;

  constructor() {
    this.service = new LoginService();
  }

  public login = async (req: Request, res: Response, _next: NextFunction) => {
    const user: IUser = req.body;
    const users = await this.service.login(user);

    const payload: IPayload = {
      id: users[0].id,
      username: users[0].username,
    }

    const token = generateToken(payload);

    return res.status(StatusCodes.OK).json({ token });
  }

}