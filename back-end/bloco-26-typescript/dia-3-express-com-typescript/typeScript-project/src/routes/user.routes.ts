import { Router } from 'express';
import { UserController } from '../controllers/index.controllers';
import { auth, validateUser } from '../middlewares/index.middlewares';

const router = Router();
const userController = new UserController();

router.post('/', validateUser, userController.create);

router.get('/', userController.getAll);

router.put('/:id', validateUser, auth, userController.update);

router.delete('/:id', auth, userController.delete);

export default router;