const connection = require('./connection');

const getNewAuthor = ({ id, firstName, middleName, lastName }) => {
  const fullName = [firstName, middleName, lastName].filter((name) => name).join(' ');
  return {
    id,
    firstName,
    middleName,
    lastName,
    fullName
  }
}

const serialize = (authorData) => {
  return {
    id: authorData.id,
    firstName: authorData.first_name,
    middleName: authorData.middle_name,
    lastName: authorData.last_name
  }
}

const getAll = async () => {
  const [authors] = await connection.execute(
    'SELECT id, first_name, middle_name, last_name FROM model_example.authors;'
    );

  return authors.map(serialize).map(getNewAuthor);
}

const findById = async (id) => {
  const [authorId] = await connection.execute(
    'SELECT id, first_name, middle_name, last_name FROM model_example.authors WHERE id=?;',
    [id]
    );

    if (authorId.length === 0) return null;

    const { firstName, middleName, lastName } = authorId.map(serialize)[0];

    return getNewAuthor({
      id,
      firstName,
      middleName,
      lastName
    });
}

function isValid (firstName, middleName, lastName) {
  if (!firstName || typeof firstName !== 'string') return false;
  if (!lastName || typeof lastName !== 'string') return false;
  
  return true;
}

async function create (first_name, middle_name, last_name) {
  return connection.execute(
    'INSERT INTO model_example.authors (first_name, middle_name, last_name) VALUES (?, ?, ?)',
    [first_name, middle_name, last_name]
    );
}

module.exports = {
  getAll,
  findById,
  create,
  isValid,
};