const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
const PORT = 3000;

const Author = require('./models/Author');

app.get('/authors', async (req, res) => {
  const authors = await Author.getAll();

  return res.status(200).json(authors);
});

app.get('/authors/:id', async (req, res) => {
  const { id } = req.params;
  const authorsId = await Author.findById(id);

  if (!authorsId) {
    return res.status(404).json({ message: 'Author not found' });
  }
  return res.status(200).json(authorsId);
});

app.post('/authors', async function (req, res) {
  const { first_name, middle_name, last_name } = req.body;
  const validation = Author.isValid(first_name, middle_name, last_name);

  if(!validation) return res.status(400).json({ message: 'Invalid data' });

  await Author.create(first_name, middle_name, last_name);

  return res.status(201).json({ message: 'Author created successfully'})
});

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}`));