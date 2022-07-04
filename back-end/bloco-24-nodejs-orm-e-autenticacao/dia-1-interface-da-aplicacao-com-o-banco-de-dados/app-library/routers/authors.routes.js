const authorController = require('../controllers/authors.controller');
const express = require('express');
const router = express.Router();

router.get('/:name', authorController.findAll);

module.exports = router;