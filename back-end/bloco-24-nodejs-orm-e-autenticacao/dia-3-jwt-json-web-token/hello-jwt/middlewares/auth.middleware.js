require('dotenv').config();
const jwt = require('jsonwebtoken');

const SECRET = process.env.JWT_SECRET;

const auth = (req, _res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    const error = new Error('Token not found');

    error.status = 401;

    return next(error);
  }

  try {
    const payload = jwt.verify(authorization, SECRET);

    req.user = payload;

    return next();
  } catch (error) {
    error.status = 401;
    console.log(error);
    return  next(error);
  }
}

module.exports = {
  auth
};