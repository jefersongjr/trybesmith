import jwt from 'jsonwebtoken';
import { IUser } from '../interfaces';
import ThrowException from '../middlewares/exceptions/ThrowException';
import LoginModel from '../models/LoginModel';

const generateToken = async (user: IUser): Promise<string> => {
  const payload = { id: user.id, user: user.username };
  const token = jwt.sign(payload, 'secret');
  return token;
};

export default class UserService {
  private model: LoginModel;

  constructor() {
    this.model = new LoginModel();
  }

  public createLogin = async (username: string, password: string): Promise<string> => {
    if (!username) throw new ThrowException(400, '"username" is required');
    if (!password) throw new ThrowException(400, '"password" is required');
   
    const user = await this.model.getLogin(username, password);
    if (!user) throw new ThrowException(401, 'Username or password invalid');
    
    const token = await generateToken(user);
    return token;
  };
}