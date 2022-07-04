require('dotenv').config();
const jwt = require('jsonwebtoken');

const SECRET = process.env.JWT_SECRET;


const validateLogin = (req, res, next) => {
  const { username, password } = req.body;

  if (username === 'admin' && password !== 's3nh4S3gur4???') {
    const error = new Error('Invalid username or password');

    error.status = 401;

    return next(error);
  }

  const admin = (username === 'admin' && password === 's3nh4S3gur4???');

  const payload = {
    username,
    admin,
  };
  

  const jwtConfig = {
    expiresIn: '1h',
    algorithm: 'HS256',
  };

  const token = jwt.sign(payload, SECRET, jwtConfig);

  return res.status(200).json({ token });
}

module.exports = {
  validateLogin
};