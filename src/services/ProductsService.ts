import { IProducts } from '../interfaces';
import ProductsModel from '../models/ProductsModel';

export default class ProductsService {
  private model: ProductsModel;

  constructor() {
    this.model = new ProductsModel();
  }

  public createProducts = async (products: IProducts):Promise<IProducts> => {
    const created = await this.model.newProduct(products);
    return created;
  };
}