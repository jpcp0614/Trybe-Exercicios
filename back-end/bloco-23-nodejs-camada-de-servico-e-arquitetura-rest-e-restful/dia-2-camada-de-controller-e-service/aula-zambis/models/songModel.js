const connection = require('./connection');

const create = async ({ name, album, artist_id }) => {
  const QUERY = 'INSERT INTO musics.songs (name, album, artist_id) VALUES (?, ?, ?);';
  const [resultSongs] = await connection.execute(QUERY, [name, album, artist_id]);

  return resultSongs;
};

const getAll = async () => {
  const QUERY = 'SELECT * FROM musics.songs;';
  const [resultSongs] = await connection.execute(QUERY);

  return resultSongs;
}

module.exports = {
  create,
  getAll
};