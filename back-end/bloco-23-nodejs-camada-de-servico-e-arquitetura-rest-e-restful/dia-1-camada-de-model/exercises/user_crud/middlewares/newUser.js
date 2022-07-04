const User = require('../models/User');

async function newUser (req, res) {
  const { firstName, lastName, email, password } = req.body;
  const result = await User.createUser(firstName, lastName, email, password)
  
  return res.status(201).json(result);

}

module.exports = newUser;