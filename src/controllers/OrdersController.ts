import { Response, Request } from 'express';
import { IOrders } from '../interfaces';
import OrdersService from '../services/OrdersService';

export default class OrdersController {
  private service: OrdersService;

  constructor() {
    this.service = new OrdersService();
  }

  public getAllOrders = async (req: Request, res: Response) => {
    const orders: IOrders[] = await this.service.getOrders();

    return res.status(200).json(orders);
  };
}