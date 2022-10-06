import { Router } from 'express';
import UserController from '../controllers/UserController';

const userRouter = Router();

const controller = new UserController();

userRouter.post('/users', controller.createNewUser);

export default userRouter;