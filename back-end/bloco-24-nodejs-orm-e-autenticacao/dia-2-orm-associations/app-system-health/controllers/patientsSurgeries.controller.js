const patientsSurgeriesService = require('../services/patientsSurgeries.services');

const getAllPatientsSurgeries = async (_req, res, next) => {
  try {
    const allPatientsSurgeries = await patientsSurgeriesService.getAllPatientsSurgeries();

    if (!allPatientsSurgeries) {
      return res.status(404).json({ message: 'No patientsSurgeries found' });
    }
    
    return res.status(200).json(allPatientsSurgeries);

  } catch (error) {
    console.log(error);
    next(error);
  }
}

module.exports = {
  getAllPatientsSurgeries,
}