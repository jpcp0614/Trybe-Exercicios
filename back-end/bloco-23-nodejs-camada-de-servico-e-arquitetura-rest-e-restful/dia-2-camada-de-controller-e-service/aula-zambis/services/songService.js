const artistModel = require('../models/artistModel');
const songModel = require('../models/songModel');

const addWithArtist = async ({ song, artist }) => {
  let artistId;
  const artistName = await artistModel.findByName(artist.name);

  if (artistName.length > 0) {
    artistId = artistName[0].id;
  } else {
    const resultArtist = await artistModel.create(artist);
    artistId = resultArtist.insertId;
  }


  const resultSong = await songModel
    .create({ ...song, artist_id: artistId });

  return {
    song: { ...song, artist_id: artistId, id: resultSong.insertId },
    artist: { ...artist, id: artistId }
  }
};

const getAll = async () => {
  return songs = await songModel.getAll();
}

module.exports = {
  addWithArtist,
  getAll,
}
