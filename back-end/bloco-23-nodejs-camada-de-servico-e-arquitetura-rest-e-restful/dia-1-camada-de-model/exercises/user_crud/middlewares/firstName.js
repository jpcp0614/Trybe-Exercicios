const isValidFirstName = require('../services/validationFirstName');

function firstName (req, res, next) {
  const { firstName } = req.body;
  const result = isValidFirstName(firstName);

  if (!result) {
    return res.status(400)
      .json({ error: true, message: `O campo 'firstName' é obrigatório` })
  }
  next();
}

module.exports = firstName;