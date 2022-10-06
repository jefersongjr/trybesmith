import { Router } from 'express';
import ProductsController from '../controllers/ProductsController';

const productsRouter = Router();

const controller = new ProductsController();

productsRouter.post('/products', controller.createNewProduct);

export default productsRouter;