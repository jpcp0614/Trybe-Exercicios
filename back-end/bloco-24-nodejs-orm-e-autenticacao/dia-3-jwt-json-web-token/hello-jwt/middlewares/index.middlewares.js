const validateMiddleware = require('./validate.middleware');
const errorMiddleware = require('./error.middleware');
const authMiddleware = require('./auth.middleware');

module.exports = {
  validateMiddleware,
  errorMiddleware,
  authMiddleware
};