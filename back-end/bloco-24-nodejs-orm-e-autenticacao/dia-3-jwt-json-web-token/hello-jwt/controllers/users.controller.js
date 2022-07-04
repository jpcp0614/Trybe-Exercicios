const usersService = require('../services/users.services');

const getUsers = async (_req, res, next) => {
  try {
    const allUsers = await usersService.getUsers();

    if (!allUsers) {
      return res.status(404).json({ message: 'Not found users' });
    }
    return res.status(200).json(allUsers);
    
  } catch (error) {
    console.log(error);
    next(error);
  }
}

const addUsers = async (req, res, next) => {
  const { username, password } = req.body;
  try {
    const addUser = await usersService.addUser({ username, password });
    
    if (!addUser) {
      return res.status(409).json({ message: 'Username already exist' });
    }

    return res.status(201).json(addUser);

  } catch (error) {
    console.log(error);
    next(error);
  }
}

module.exports = {
  getUsers,
  addUsers,
}