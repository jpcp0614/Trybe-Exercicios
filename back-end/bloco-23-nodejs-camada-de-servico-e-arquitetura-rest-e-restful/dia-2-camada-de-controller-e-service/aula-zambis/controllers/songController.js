const songModel = require('../models/songModel');
const songService = require('../services/songService');

const create = async (req, res) => {
  const { name, album, artist_id } = req.body;
  const result = await songModel.create({ name, album, artist_id });

  return res.status(201).json({ id: result.insertId, name, album, artistId: artist_id })
};

const getAll = async (_req, res) => {
  const songs = await songService.getAll();

  return res.status(200).json(songs);
}

const createSongWithArtist = async (req, res) => {
  const { song, artist } = req.body;
  const result = await songService.addWithArtist({ song, artist });

  return res.status(201).json(result)
}

module.exports = {
  create,
  createSongWithArtist,
  getAll,
}