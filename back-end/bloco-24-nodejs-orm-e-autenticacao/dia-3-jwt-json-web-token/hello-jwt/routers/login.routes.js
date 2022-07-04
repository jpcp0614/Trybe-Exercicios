const express = require('express');
const router = express.Router();

const { validateMiddleware } = require('../middlewares/index.middlewares');
const { loginController } = require('../controllers/index.controllers');

router.post('/', validateMiddleware.usernameAndPassword, loginController.validateLogin);

module.exports = router;