const { Book } = require('../models');
const { Op } = require('sequelize');
// const Op = Sequelize.Op;

async function findAll (req, res, next) {
  const { name } = req.params;

  try {
    const book = await Book.findAll({ where: { author: {[Op.like]: '%' + name + '%'} } }); //* ref.: 1, 2

    if (!book) {
      return res.status(404).json({ message: 'Não há nenhum autor com este nome cadastrado' });
    }
    return res.status(200).json(book);

  } catch (error) {
    console.log('Error: ', error);
    next(error);
  }
}

module.exports = {
  findAll,
}

//* 1) https://stackoverflow.com/questions/9321225/using-dynamic-search-parameters-with-sequelize-js
//* 2) https://sequelize.org/master/manual/model-querying-finders.html
