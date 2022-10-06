import { Pool, ResultSetHeader } from 'mysql2/promise';
import { IUser } from '../interfaces';
import connection from './connection';

export default class UserModel {
  private connection: Pool;

  constructor() {
    this.connection = connection;
  }

  public newUser = async (user: IUser): Promise<IUser> => {
    const { username, classe, level, password } = user;

    const query = `INSERT INTO Trybesmith.Users (username, classe, level, password) 
                    VALUES (?, ?, ?, ?)`;
    const values = [username, classe, level, password];

    const [result] = await this.connection.execute<ResultSetHeader>(query, values);
    const { insertId: id } = result;

    const created: IUser = { id, ...user };
    return created;
  };
}