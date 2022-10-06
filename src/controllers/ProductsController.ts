import { Request, Response } from 'express';
import ProductsService from '../services/ProductsService';
import { IProducts } from '../interfaces';

export default class ProductsController {
  private service: ProductsService;

  constructor() {
    this.service = new ProductsService();
  }

  public createNewProduct = async (req: Request, res: Response) => {
    const products = req.body as IProducts;

    const created: IProducts = await this.service.createProducts(products);
    return res.status(201).json(created);
  };

  public getAllProducts = async (req: Request, res: Response) => {
    const products: IProducts[] = await this.service.getProducts();

    return res.status(200).json(products);
  };
}