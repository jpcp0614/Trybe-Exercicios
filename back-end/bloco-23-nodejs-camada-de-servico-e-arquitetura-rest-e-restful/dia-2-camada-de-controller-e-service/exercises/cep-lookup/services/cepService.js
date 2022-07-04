const cepModel = require('../models/cepModel');
const cepController =require('../controllers/cepController');


async function verifyCep (cep) {
   
  const replaceCep = cep.replace('-', '')
  
  const [resultCepModel] = await cepModel.findCep(replaceCep);

  if (!resultCepModel) { // não existe o cep no db cep_lookup
    return {
      error: {
        code: 'notFound',
        message: 'CEP não encontrado'
      }
    }
  }
  
  return resultCepModel;
}


module.exports = {
  verifyCep,
}