const { Patient, Surgery } = require('../models');

const getAllPatientsSurgeries = async () => {
  const allPatientsSurgeries = await Patient.findAll({
    include: { model: Surgery, as: 'surgeries'}
  });

  if (allPatientsSurgeries.length === 0) return null;

  return allPatientsSurgeries;
}

module.exports = {
  getAllPatientsSurgeries,
}