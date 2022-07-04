const bookModel = require('../../../models/Book');

const {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists
} = require('sequelize-test-helpers');

describe('The Book Model', () => {
  const Book = bookModel(sequelize, dataTypes);
  const book = new Book();

  it('has name "Book"', () => {
    checkModelName(Book)('Book');
  });

  context(`has properties "title", "author" e "pageQuantity"`, () => {
    ['title', 'author', 'pageQuantity'].forEach(checkPropertyExists(book))
  });
});