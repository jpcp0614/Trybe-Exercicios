const { User } = require('../models');

const getUsers = async () => {
  const allUsers = await User.findAll();

  if (allUsers.length === 0) {
    return null;
  }

  return allUsers;
}

const addUser = async ({ username, password }) => {
  const checkUsernameInDB = await User.findAll({ where: { username } });

  if (checkUsernameInDB.length > 0) {
    return null;
  }

  const createdUser = await User.create({ username, password });

  return createdUser;
}

module.exports = {
  getUsers,
  addUser
}