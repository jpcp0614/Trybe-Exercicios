import { Router } from 'express';
import BookController from '../controllers/books.controller';
import { validateBook } from '../middlewares/validation.middleware';

const router = Router();

const booksController = new BookController();

router.get('/books', booksController.getAll);

router.get('/books/:id', booksController.getById);

router.post('/books', validateBook, booksController.create);

router.put('/books/:id', validateBook, booksController.update);

router.delete('/books/:id', booksController.remove);

export default router;