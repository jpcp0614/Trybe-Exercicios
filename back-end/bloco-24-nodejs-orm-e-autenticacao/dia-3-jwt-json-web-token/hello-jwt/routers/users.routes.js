const express = require('express');
const router = express.Router();

const { usersController, meController } = require('../controllers/index.controllers');
const { authMiddleware, validateMiddleware } = require('../middlewares/index.middlewares');

router.get('/', usersController.getUsers);

router.get('/me', authMiddleware.auth, meController.me);

router.post('/', validateMiddleware.usernameAndPassword, usersController.addUsers);

module.exports = router;
