const { Store } = require('../models');

async function findAll (_req, res, _next) {
  try {
    const storeAll = await Store.findAll();
    return res.status(200).json(storeAll);
  } catch (error) {
    return res.status(500).json({ message: 'Deu ruim!' });
  }
};

async function create (req, res, _next) {
  try {
    const { name, description } = req.body;
    const newStore = await Store.create({ name, description });
    return res.status(201).json(newStore);
  } catch (error) {
    return res.status(500).json({ message: 'Deu ruim!' });
  }
};

module.exports = {
  findAll,
  create,
};