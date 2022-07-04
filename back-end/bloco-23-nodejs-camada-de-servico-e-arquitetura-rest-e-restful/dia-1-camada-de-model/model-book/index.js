const express = require('express');
const app = express();
const PORT = 3000;

const Book = require('./models/Book');

app.get('/books', async function (req, res) {
  const { author_id } = req.query;

  const books = (author_id)
    ? await Book.getByAuthorId(author_id)
    : await Book.getAll();

  return res.status(200).json(books);
});

app.get('/books/:id', async function (req, res) {
  const { id } = req.params;
  const books = await Book.getByBookId(id);

  if(!books) return res.status(404).json({ message: 'book not found' });

  return res.status(200).json(books);
});

app.post('/books', async function (req, res) {
  const { title, author_id } = req.body;
  const validationTitle = Book.isValidTitle(title);
  const validationAuthorId = await Book.isValidAuthorId(author_id);

  if(!validationTitle || !validationAuthorId) {
    return res.status(400).json({ message: 'Invalid data' });
  }
  await Book.creatAuthor(title, author_id);

  return res.status(201).json({ message: 'Book created successfully' })
});

app.listen(PORT, () => console.log(`Running in port ${PORT}`));