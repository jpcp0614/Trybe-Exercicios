import { connection, OrderModel } from '../models/index.model';
import { IAddOrder, IOrder, IOrderId } from '../interfaces/index.interfaces';
import { NotFoundError } from 'restify-errors';

export default class OrderService {
  public model: OrderModel;

  constructor() {
    this.model = new OrderModel(connection);
  }

  public create = async (order: IAddOrder): Promise<IOrder> => {
    const orders = await this.model.create(order);

    return orders;
  }

  public getAll = async (): Promise<IOrderId[]> => {
    const orders = await this.model.getAll();

    return orders;
  }

  public getById = async (id: number): Promise<IOrderId> => {
    const orders = await this.model.getById(id);

    if (!orders) {
      throw new NotFoundError('Order not found');
    }

    return orders;
  }

}