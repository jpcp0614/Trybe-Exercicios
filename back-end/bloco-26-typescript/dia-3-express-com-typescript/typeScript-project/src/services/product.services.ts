import { connection, ProductModel } from '../models/index.model';
import { IAddProduct, IProduct, IProductsList } from '../interfaces/index.interfaces';
import { NotFoundError } from 'restify-errors';

export default class ProductService {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  public create = async (product: IAddProduct): Promise<IProduct> => {
    const createdProduct = await this.model.create(product);

    return createdProduct;
  }

  public getAll = async (): Promise<IProductsList[]> => {
    const products = await this.model.getAll();

    if (products.length === 0) {
      throw new NotFoundError(`Products not found`);
    }

    return products;
  }

  public getById = async (id: number): Promise<IProductsList> => {
    const product = await this.model.getById(id);

    if (!product) {
      throw new NotFoundError(`Product not found`);
    }

    return product;
  }

  public update = async (id: number, product: IAddProduct): Promise<void> => {
    const products = await this.model.getById(id);

    if (!products) {
      throw new NotFoundError(`Product not found`);
    }
    
    await this.model.update(id, product);
  }

  public remove = async (id: number): Promise<void> => {
    const products = await this.model.getById(id);

    if (!products) {
      throw new NotFoundError(`Product not found`);
    }

    await this.model.remove(id);
  }

}
