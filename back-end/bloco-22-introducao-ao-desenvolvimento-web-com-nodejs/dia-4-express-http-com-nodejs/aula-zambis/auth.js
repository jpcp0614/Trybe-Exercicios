//* Authorization
function autho (req, res, next) { //* função para verificar a segurança
  if (!req.headers.authorization || req.headers.authorization.length !== 10) { //* authorization é onde fica o token
    return res.status(401).send({ message: 'Invalid token' });
  }
  next(); //* sem parâmetro, vai para função seguinte a ele
};

module.exports = autho;