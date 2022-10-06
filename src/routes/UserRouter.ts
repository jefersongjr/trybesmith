import { Router } from 'express';
import UserController from '../controllers/UserController';

const userRouter = Router();

const controller = new UserController();

userRouter.post('/user', controller.createNewUser);

export default userRouter;