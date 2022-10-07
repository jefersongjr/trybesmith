import { IProducts } from '../interfaces';
import ProductsModel from '../models/ProductsModel';
import productsValidate from '../middlewares/ProductsMidleware';

export default class ProductsService {
  private model: ProductsModel;

  constructor() {
    this.model = new ProductsModel();
  }

  public createProducts = async (products: IProducts):Promise<IProducts> => {
    productsValidate(products.name, 'name');
    productsValidate(products.amount, 'amount');
    console.log(typeof (products.name));
    const created = await this.model.newProduct(products);
    return created;
  };

  public getProducts = async (): Promise<IProducts[]> => {
    const products: IProducts[] = await this.model.getAll();
    return products;
  };
}