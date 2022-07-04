const isValidLastName = require('../services/validationLastName');

function lastName (req, res, next) {
  const { lastName } = req.body;
  const result = isValidLastName(lastName);

  if (!result) {
    return res.status(400)
      .json({ error: true, message: `O campo 'lastName' é obrigatório` })
  }
  next();
}

module.exports = lastName;