import { IUser } from '../interfaces';
import UserModel from '../models/UserModel';

export default class UserService {
  private model: UserModel;

  constructor() {
    this.model = new UserModel();
  }

  public createUser = async (user: IUser): Promise<IUser> => {
    const created = await this.model.newUser(user);
    return created;
  };
}