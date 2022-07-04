function cepMiddleware (req, res) {
  const REGEX_CEP = /\d{5}-\d{3}/;
  if (!REGEX_CEP.test(cep)) { // caso o CEP seja inválido
    return {
        error: {
            code: 'invalidData',
            message: 'CEP inválido'
          }
        }
      }
}

module.exports = {
  cepMiddleware,
}