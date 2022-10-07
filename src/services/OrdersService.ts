import { IOrders } from '../interfaces';
import OrdersModel from '../models/OrdersModel';

export default class OrdersService {
  private model: OrdersModel;

  constructor() {
    this.model = new OrdersModel();
  }

  public getOrders = async (): Promise<IOrders[]> => {
    const orders: IOrders[] = await this.model.findOrders();

    return orders;
  };
}