import { Router } from 'express';
import LoginController from '../controllers/LoginController';

const loginRouter = Router();

const controller = new LoginController();

loginRouter.post('/login', controller.getLoginUser);

export default loginRouter;