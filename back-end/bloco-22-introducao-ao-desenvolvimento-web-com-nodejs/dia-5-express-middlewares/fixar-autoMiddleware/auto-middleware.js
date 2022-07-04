const validUser = [
  { username: 'MestreCuca', password: 'MinhaSenhaSuperSeguraSqn'},
  { username: 'McRonald', password: 'Senha123Mudar'},
  { username: 'Burger Queen', password: 'Senha123Mudar'},
  { username: 'UpWay', password: 'Senha123Mudar'}
];

function authMiddleware (req, res, next) {
  const { username, password } = req.headers;

  if (!username && !password) {
  return res.status(401).json({ message: 'Username and password can\'t be blank' });
  };

  const foundUser = validUser.find(user => user.username === username);

  if (!foundUser) return res.status(401).json({ message: 'Invalid credentials' })

  if (!(username === validUser.username && password === validUser.password)) {
    return res.status(401).json({ message: 'Invalid credentials' });
  };

  req.user = foundUser;

  next();
};

module.exports = authMiddleware;