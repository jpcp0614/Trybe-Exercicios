const cepService = require('../services/cepService');
const cepModel = require('../models/cepModel')

async function findAddressByCep (req, res) {
  const { cep } = req.params;

  const resultCepService = await cepService.verifyCep(cep);

  if (!resultCepService) {
    return res.status(404).json({ message: 'Tá errado isso aqui!!!'})
  }

return res.status(200).json(resultCepService);
};

module.exports = {
  findAddressByCep,
}