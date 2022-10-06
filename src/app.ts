import express from 'express';
import productsRouter from './routes/ProductsRouter';
import userRouter from './routes/UserRouter';

const app = express();

app.use(express.json());

app.use(productsRouter);
app.use(userRouter);

export default app;
