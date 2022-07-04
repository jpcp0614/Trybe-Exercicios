const usersSchema = require('../schemas/users.schema');

const usernameAndPassword = (req, _res, next) => {
  // const { username, password } = req.body;
  const { error } = usersSchema.validate(req.body);

  if (error) {
    const [status, message] = error.message.split('|');
    const objError = {
      status: Number(status),
      message
    }
    next(objError);
  }
  next();
};

module.exports = { 
  usernameAndPassword
};