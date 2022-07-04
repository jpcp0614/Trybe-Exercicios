import { Router } from 'express';
import { LoginController } from '../controllers/index.controllers';
import { validateLogin } from '../middlewares/index.middlewares';

const router = Router();
const loginController = new LoginController();

router.post('/', validateLogin, loginController.login);

export default router;