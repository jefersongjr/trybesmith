import { Router } from 'express';
import OrdersController from '../controllers/OrdersController';

const ordersRouter = Router();

const controller = new OrdersController();

ordersRouter.get('/orders', controller.getAllOrders);

export default ordersRouter;