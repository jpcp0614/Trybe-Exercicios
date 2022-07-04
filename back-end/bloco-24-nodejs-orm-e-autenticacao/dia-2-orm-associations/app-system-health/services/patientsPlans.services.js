const { Patient, Plan } = require('../models');

const getAllPatients = async () => {
  const allPatients = await Patient.findAll();

  if (allPatients.length === 0) return null;

  return allPatients;
}

const getAllPatientsPlans = async () => {
  const allPatientsPlans = await Patient.findAll({
    attributes: { exclude: ['plan_id'] },
    include: { model: Plan, as: 'plans' },
    // raw: true,
    // nest: true
  });

  if (allPatientsPlans.length === 0) return null;

  return allPatientsPlans;
}

const getPatientById = async (id) => {
  const patient = await Patient.findByPk(id);

  if (patient.length === 0) return null;

  return patient;
}

module.exports = {
  getAllPatients,
  getAllPatientsPlans,
  getPatientById
}