import { Pool, RowDataPacket } from 'mysql2/promise';
import { IUser } from '../interfaces';
import connection from './connection';

export default class LoginModel {
  private connection : Pool;

  constructor() {
    this.connection = connection;
  }
  
  public getLogin = async (username: string, password: string): Promise<IUser> => {
    const [[row]] = await this.connection.execute<(IUser & RowDataPacket)[]>( 
      'SELECT * FROM Trybesmith.Users WHERE username = ? AND password = ?', [username, password]);
    return row;
  };
}