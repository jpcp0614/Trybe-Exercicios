require('dotenv').config();
const { Book, User } = require('./models');

const express = require('express');
const app = express();

app.get('/usersbooks/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({
      where: { userId: id },
      include: [{ model: Book, as: 'books', through: { attributes: [] } }],
    });

    if (!user)
      return res.status(404).json({ message: 'Usuário não encontrado' });

    return res.status(200).json(user);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  };
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));

module.exports = app;

/*

* SEM attributes
{
  "userId": 1,
  "firstName": "Bárbara",
  "lastName": "Silva",
  "age": 16,
  "books": [
    {
      "bookId": 1,
      "name": "Livro A",
      "releaseYear": 2020,
      "numberPages": 111,
      "UserBook": {
        "book_id": 1,
        "user_id": 1
      }
    },
    {
      "bookId": 3,
      "name": "Livro C",
      "releaseYear": 2018,
      "numberPages": 333,
      "UserBook": {
        "book_id": 3,
        "user_id": 1
      }
    }
  ]
}

* COM attributes
{
  "userId": 1,
  "firstName": "Bárbara",
  "lastName": "Silva",
  "age": 16,
  "books": [
    {
      "bookId": 1,
      "name": "Livro A",
      "releaseYear": 2020,
      "numberPages": 111
    },
    {
      "bookId": 3,
      "name": "Livro C",
      "releaseYear": 2018,
      "numberPages": 333
    }
  ]
}

*/