import { Router } from 'express';
import { ProductController } from '../controllers/index.controllers';
import { auth, validateProduct } from '../middlewares/index.middlewares';

const router = Router();
const productController = new ProductController();

router.post('/', validateProduct, auth, productController.create);

router.get('/', auth, productController.getAll);

router.get('/:id', auth, productController.getById);

router.put('/:id', validateProduct, auth, productController.update);

router.delete('/:id', auth, productController.remove);

export default router;