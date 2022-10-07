import express from 'express';
import ordersRouter from './routes/OrdersRouter';
import productsRouter from './routes/ProductsRouter';
import userRouter from './routes/UserRouter';

const app = express();

app.use(express.json());

app.use(productsRouter);
app.use(userRouter);
app.use(ordersRouter);

export default app;
