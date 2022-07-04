import { ProductService } from "../services/index.services";
import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import { IAddProduct } from '../interfaces/index.interfaces';

export default class ProductController {
  private service: ProductService;

  constructor() {
    this.service = new ProductService();
  }

  public create = async (req: Request, res: Response, _next: NextFunction) => {
    const product: IAddProduct = req.body;
    const createdProduct = await this.service.create(product);

    return res.status(StatusCodes.CREATED).json(createdProduct);
  }

  public getAll = async (_req: Request, res: Response, _next: NextFunction) => {
    const products = await this.service.getAll();

    return res.status(StatusCodes.OK).json(products);
  }

  public getById = async (req: Request, res: Response, _next: NextFunction) => {
    const id: number = +req.params.id;
    const product = await this.service.getById(id);

    return res.status(StatusCodes.OK).json(product);
  }

  public update = async (req: Request, res: Response, _next: NextFunction) => {
    const id: number = +req.params.id;
    const product: IAddProduct = req.body;

    await this.service.update(id, product);

    return res.status(StatusCodes.OK).json({ message: `Product with id=${id} successfully updated!` });
  }

  public remove = async (request: Request, res: Response, _next: NextFunction) => {
    const id: number = +request.params.id;

    await this.service.remove(id);

    return res.status(StatusCodes.OK).json({ message: `Product with id=${id} successfully removed!` });
  }

}
