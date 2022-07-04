import express from 'express';
import dotenv from 'dotenv';
import 'express-async-errors';
import { middlewareError } from './middlewares/error.middleware';
import {
  userRouter,
  loginRouter,
  productRouter,
  orderRouter,
} from './routes/index.routes';

dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use('/users', userRouter);
app.use('/login', loginRouter);
app.use('/products', productRouter);
app.use('/orders', orderRouter);

app.use(middlewareError);

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});