import { OrderService } from '../services/index.services';
import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import { IAddOrder } from '../interfaces/index.interfaces';

export default class OrderController {
  private service: OrderService;

  constructor() {
    this.service = new OrderService();
  }

  public create = async (req: Request, res: Response, _next: NextFunction) => {
    const products: IAddOrder = req.body;
    const createdOrder = await this.service.create(products);
    
    return res.status(StatusCodes.CREATED).json(createdOrder);
  }

  public getAll = async (req: Request, res: Response, _next: NextFunction) => {
    const orders = await this.service.getAll();

    return res.status(StatusCodes.OK).json(orders);
  }

  public getById = async (req: Request, res: Response, _next: NextFunction) => {
    const id: number = +req.params.id;
    const order = await this.service.getById(id);

    return res.status(StatusCodes.OK).json(order);
  }

}