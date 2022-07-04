const router = require('express').Router();

// const validateEmail = require('../middlewares/validations');
// const validateUsername = require('../middlewares/validations');
// const validatePassword = require('../middlewares/validations');

const {
  validateUsername,
  validateEmail,
  validatePassword
} = require('../middlewares/validations');

const pipeLine1 = [validateUsername, validateEmail, validatePassword];
const pipeLine2 = [validateUsername, validatePassword];

router.post('/register', pipeLine1, function (_req, res) {
  return res.status(200).json({ message: 'user created' });
});

router.post('/login', pipeLine2, function (req, res) {
  return res.status(200).json({ message: '123456789' })
});

module.exports = router;
