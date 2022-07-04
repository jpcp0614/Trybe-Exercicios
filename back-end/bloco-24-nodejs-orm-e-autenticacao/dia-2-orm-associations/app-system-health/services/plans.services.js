const { Plan, Patient } = require('../models');

const getPlanById = async (id) => {
  const allPlan = await Plan.findByPk(id, {
    include: { model: Patient, as: 'patients'}
  });

  if (allPlan.length === 0) return null;

  return allPlan;
}

module.exports = {
  getPlanById,
}