const errorMiddleware = require('./error.middleware');
const {
  validateTitle,
  validateAuthor,
  validatePageQuantity } = require('./book.middleware');

module.exports = {
  errorMiddleware,
  validateTitle,
  validateAuthor,
  validatePageQuantity
}