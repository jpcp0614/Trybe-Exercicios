import express, { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import dotenv from 'dotenv';
import 'express-async-errors';
import { MiddlewareError } from './middlewares/error.middleware';
import BooksRoutes from './routes/books.routes';

dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get('/', (_req: Request, res: Response, _next: NextFunction) => {
  return res.status(StatusCodes.OK).send('Express + TypeScript');
});

app.use(BooksRoutes);

app.use(MiddlewareError);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}/`)
});
