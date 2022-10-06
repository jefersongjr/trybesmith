import { Pool, ResultSetHeader } from 'mysql2/promise';
import { IProducts } from '../interfaces';
import connection from './connection';

export default class ProductsModel {
  private connection : Pool;

  constructor() {
    this.connection = connection;
  }

  public newProduct = async (products: IProducts): Promise<IProducts> => { 
    const { name, amount } = products;

    const query = 'INSERT INTO Products (name, amout) VALUES (?, ?)';
    const values = [name, amount];

    const [result] = await this.connection.execute<ResultSetHeader>(query, values);
    const { insertId: id } = result;
        
    const created: IProducts = { id, ...products };
  
    return created;
  };
}