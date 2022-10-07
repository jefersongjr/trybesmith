import { Response, Request, NextFunction } from 'express';
import { IUser } from '../interfaces';
import LoginService from '../services/LoginService';

export default class UserController {
  private service: LoginService;

  constructor() {
    this.service = new LoginService();
  }

  public getLoginUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { username, password } = req.body as IUser;

      const created = await this.service.createLogin(username, password);

      return res.status(200).json({ token: created });
    } catch (error) {
      next(error);
    } 
  };
}