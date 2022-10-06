import jwt from 'jsonwebtoken';
import { IUser } from '../interfaces';
import UserModel from '../models/UserModel';

const generateToken = async (user: IUser): Promise<string> => {
  const payload = { id: user.id, user: user.username };
  const token = jwt.sign(payload, 'secret');
  return token;
};

export default class UserService {
  private model: UserModel;

  constructor() {
    this.model = new UserModel();
  }

  public createUser = async ( 
    username: string,
    classe: string, 
    level: number, 
    password: string,
  ): Promise<string> => {
    const user = await this.model.newUser({ username, classe, level, password });
    const token = await generateToken(user);
    return token;
  };
}