import { middlewareError } from './error.middleware';
import { validateUser } from './user.middleware';
import { validateLogin } from './login.middleware';
import { auth } from './auth.middleware';
import { validateProduct } from './product.middleware';
import { validateOrder } from './order.middleware';

export {
  middlewareError,
  validateUser,
  validateLogin,
  auth,
  validateProduct,
  validateOrder,
}