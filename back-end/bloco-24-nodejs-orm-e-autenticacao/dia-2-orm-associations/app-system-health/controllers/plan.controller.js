const planService = require('../services/plans.services');

const getPlanById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const allPlan = await planService.getPlanById(id);

    if (!allPlan) {
      return res.status(404).json({ message: 'No plan found'})
    }

    return res.status(200).json(allPlan);
    
  } catch (error) {
    console.log(error);
    next(error);
  }
}

module.exports = {
  getPlanById,
}