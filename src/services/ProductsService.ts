import { IProducts } from '../interfaces';
import ProductsModel from '../models/ProductsModel';
import ThrowException from '../middlewares/exceptions/ThrowException';

export default class ProductsService {
  private model: ProductsModel;

  constructor() {
    this.model = new ProductsModel();
  }

  public createProducts = async (products: IProducts):Promise<IProducts> => {
    if (!products.name) throw new ThrowException(400, '"name" is required');
    const created = await this.model.newProduct(products);
    return created;
  };

  public getProducts = async (): Promise<IProducts[]> => {
    const products: IProducts[] = await this.model.getAll();
    return products;
  };
}