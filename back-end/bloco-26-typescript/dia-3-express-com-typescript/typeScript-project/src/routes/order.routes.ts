import { Router } from 'express';
import { OrderController } from '../controllers/index.controllers';
import { auth, validateOrder } from '../middlewares/index.middlewares';

const router = Router();
const orderController = new OrderController();

router.post('/', validateOrder, auth, orderController.create);

router.get('/', auth, orderController.getAll);

router.get('/:id', auth, orderController.getById);

export default router;