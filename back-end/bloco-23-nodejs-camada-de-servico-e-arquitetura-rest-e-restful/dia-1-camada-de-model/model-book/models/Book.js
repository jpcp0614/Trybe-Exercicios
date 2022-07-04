const connection = require('./connection');

function serialize (bookData) {
    return {
      id: bookData.id,
      title: bookData.title,
      authorId: bookData.author_id
    }
};


async function getAll () {
  const [books] = await connection.execute(
    'SELECT id, title, author_id FROM model_example.books;'
  );

  return books.map(serialize);
};

async function getByAuthorId (author_id) {
  const QUERY = 'SELECT id, title, author_id FROM model_example.books WHERE author_id=?;';
  const [authorId] = await connection.execute(QUERY, [author_id]);

  return authorId.map(serialize);
}

async function getByBookId (id) {
  const QUERY = 'SELECT id, title, author_id FROM model_example.books WHERE id=?;';
  const [bookId] = await connection.execute(QUERY, [id]);

  if (bookId.length === 0) return null;

  return bookId.map(serialize)[0];
}

function isValidTitle (title) {
  if (!title || title.length < 3 || typeof title !== 'string') return false;
  
  return true;
}

async function isValidAuthorId (author_id) {
  const findAuthorId = await Book.getByAuthorId(author_id);
  
  if (!author_id || !findAuthorId || typeof author_id !== 'number') return false;

  return true;
}

async function creatAuthor (title, author_id) {
  const QUERY = 'INSERT INTO model_example.books (title, author_id) VALUES (?, ?);'
  const creatBook = await connection.execute(QUERY, [title, author_id])

  return creatBook;
}

module.exports = {
  getAll,
  getByAuthorId,
  getByBookId,
  isValidTitle,
  isValidAuthorId,
  creatAuthor,
};