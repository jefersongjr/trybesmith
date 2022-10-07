import express from 'express';
import loginRouter from './routes/LoginRouter';
import ordersRouter from './routes/OrdersRouter';
import productsRouter from './routes/ProductsRouter';
import userRouter from './routes/UserRouter';
import errorMiddleware from './middlewares/errorMiddleware';

const app = express();

app.use(express.json());

app.use(productsRouter);
app.use(userRouter);
app.use(ordersRouter);
app.use(loginRouter);

app.use(errorMiddleware);

export default app;
