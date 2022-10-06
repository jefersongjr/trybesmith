import { Response, Request } from 'express';
import { IUser } from '../interfaces';
import UserService from '../services/UserService';

export default class UserController {
  private service: UserService;

  constructor() {
    this.service = new UserService();
  }

  public createNewUser = async (req: Request, res: Response) => {
    const { username, classe, level, password } = req.body as IUser;

    const created = await this.service.createUser(username, classe, level, password);

    return res.status(201).json({ token: created });
  };
}