const booksController = require('../controllers/books.controller');
const express = require('express');
const router = express.Router();

const {
  validateTitle,
  validateAuthor,
  validatePageQuantity } = require('../middlewares/index.middleware');
const validations = [validateTitle, validateAuthor, validatePageQuantity];

router.get('/', booksController.findAll);

router.get('/:id', booksController.findByPk);

router.post('/', validations, booksController.create);

router.put('/:id', validations, booksController.update);

router.delete('/:id', booksController.exclude);

module.exports = router;