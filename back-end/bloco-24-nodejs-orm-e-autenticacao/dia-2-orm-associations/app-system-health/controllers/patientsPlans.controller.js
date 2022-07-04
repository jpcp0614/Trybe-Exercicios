const patientsPlansService = require('../services/patientsPlans.services');

const getAllPatients = async (_req, res, next) => {
  try {
    const allPatients = await patientsPlansService.getAllPatients();

    if (!allPatients) {
      return res.status(404).json({ message: 'No patients found' });
    }

    return res.status(200).json(allPatients);
    
  } catch (error) {
    console.log(error);
    next(error);
  }
}

const getAllPatientsPlans = async (_req, res, next) => {
  try {
    const allPatientsPlans = await patientsPlansService.getAllPatientsPlans();

    if (!allPatientsPlans) {
      return res.status(404).json({ message: 'No patientsPlans found' });
    }
    
    return res.status(200).json(allPatientsPlans);

  } catch (error) {
    console.log(error);
    next(error);
  }
}

const getPatientById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const patient = await patientsPlansService.getPatientById(id);

    if (!patient) {
      return res.status(404).json({ message: 'No patient found' });
    }
    
    return res.status(200).json(patient);
    
  } catch (error) {
    console.log(error);
    next(error);
  }
  
}

module.exports = {
  getAllPatients,
  getAllPatientsPlans,
  getPatientById
}