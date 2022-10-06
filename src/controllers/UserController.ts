import { Response, Request } from 'express';
import { IUser } from '../interfaces';
import UserModel from '../models/UserModel';

export default class UserController {
  private service: UserModel;

  constructor() {
    this.service = new UserModel();
  }

  public createNewUser = async (req: Request, res: Response) => {
    const user = req.body as IUser;

    const created = await this.service.newUser(user);

    return res.status(201).json(created);
  };
}