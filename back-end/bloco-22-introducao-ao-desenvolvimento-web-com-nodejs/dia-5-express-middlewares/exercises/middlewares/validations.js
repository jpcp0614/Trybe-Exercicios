const MIN_CHARACTERS_USERNAME = 3;
const MIN_CHARACTERS_PASSWORD = 4;
const MAX_CHARACTERS_PASSWORD = 8;

function validateUsername (req, res, next) {
  const { username } = req.body;

  if (!username || username < MIN_CHARACTERS_USERNAME) {
    return res.status(400).json({ message: 'invalid username' })
  }
  next();
};

function validateEmail (req, res, next) {
  const { email } = req.body;

  const arroba = email.include('@');
  const com = email.includes('.com');
  if (!email || !arroba || !com) {
    return res.status(400).json({ message: 'invalid email' })
  }
  next();
};

function validatePassword (req, res, next) {
  const { password } = req.body;

  const verifyPassword = /^[0-9]*$/.test(password);
  if (password.length < MIN_CHARACTERS_PASSWORD
    || password.length > MAX_CHARACTERS_PASSWORD
    || !verifyPassword) {
      return res.status(400).json({ message: 'invalid password' })
  }
  next();
};

module.exports = {
  validateUsername,
  validateEmail,
  validatePassword
};