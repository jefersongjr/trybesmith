import { Pool } from 'mysql2/promise';
import { IOrders } from '../interfaces';
import connection from './connection';

export default class OrdersModel {
  private connection: Pool;
    
  constructor() {
    this.connection = connection;
  }

  public findOrders = async (): Promise<IOrders[]> => {
    const query = `SELECT  orderId AS id, userId,
                  JSON_ARRAYAGG(products.id) AS productsIds
                  FROM Trybesmith.Products AS products 
                  INNER JOIN Trybesmith.Orders AS orders ON products.orderId = orders.id
                  GROUP BY orderId;`;
    const [result] = await this.connection.execute(query);

    return result as IOrders[];
  };
}