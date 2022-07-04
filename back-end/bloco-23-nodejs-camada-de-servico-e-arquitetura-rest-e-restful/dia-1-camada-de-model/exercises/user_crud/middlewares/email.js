const isValidEmail = require('../services/validationEmail');

function email (req, res, next) {
  const { email } = req.body;
  const result = isValidEmail(email);

  if (!result) {
    return res.status(400)
      .json({ error: true, message: `O campo 'email' deve ter o formato 'email@email.com'` })
  }
  next();
}

module.exports = email;