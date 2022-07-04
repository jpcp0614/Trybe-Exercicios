const { Book } = require('../models');

async function findAll (_req, res, next) {
  try {
    const books = await Book.findAll({ order: [['title', 'ASC'], ['createdAt', 'ASC']] }); //* ref.: 1

    if (books.length === 0) {
      return res.status(404).json({ message: 'Não há nenhum livro cadastrado' });
    }
    return res.status(200).json(books);

  } catch (error) {
    console.log('Error: ', error);
    next(error);
  }
}

async function findByPk (req, res, next) {
  const { id } = req.params;

  try {
    const book = await Book.findByPk(id);

    if (!book) {
      return res.status(404).json({ message: 'Não há nenhum livro com o "id" informado' });
    }
    return res.status(200).json(book)

  } catch (error) {
    console.log('Error: ', error);
    next(error);
  }
}

async function create (req, res, next) {
  const { title, author, pageQuantity } = req.body;

  try {
    const newBook = await Book.create({ title, author, pageQuantity });
    return res.status(201).json(newBook);

  } catch (error) {
    console.log('Error: ', error);
    next(error);
  }
}

async function update (req, res, next) {
  const { title, author, pageQuantity } = req.body;
  const { id } = req.params;

  try {
    const book = await Book.findByPk(id);

    if (!book) {
      return res.status(404).json({ message: 'Não há nenhum livro com o "id" informado' });
    }
    const updateBook = await Book.update({ title, author, pageQuantity }, { where: { id } });
    return res.status(200).json(updateBook);

  } catch (error) {
    console.log('Error: ', error);
    next(error);
  }
}

async function exclude (req, res, next) {
  const { id } = req.params;

  try {
    const book = await Book.findByPk(id);

    if (!book) {
      return res.status(404).json({ message: 'Não há nenhum livro com o "id" informado' });
    }
    await book.destroy(id);
    return res.status(200).json({ message: 'Livro deletado' });
    
  } catch (error) {
    console.log('Error: ', error);
    next(error);
  }
}

module.exports = {
  findAll,
  findByPk,
  create,
  update,
  exclude,
};

//* 1) https://stackoverflow.com/questions/36259532/sequelize-findall-sort-order-in-nodejs