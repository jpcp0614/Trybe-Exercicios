const connection = require('./connection');

const findByName = async (name) => {
  const QUERY = 'SELECT * FROM musics.artists WHERE name=?;';
  const [resultArtists] = await connection.execute(QUERY, [name]);

  return resultArtists;
}

const create = async ({ name, genre }) => {
  const QUERY = 'INSERT INTO musics.artists (name, genre) VALUES (?, ?);';
  const [resultArtists] = await connection.execute(QUERY, [name, genre]);

  return resultArtists;
};

module.exports = {
  create,
  findByName,
};