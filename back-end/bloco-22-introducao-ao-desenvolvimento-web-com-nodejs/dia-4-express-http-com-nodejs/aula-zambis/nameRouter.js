const fs = require('fs').promises;
const { Router } = require('express');
const autho = require('./auth');

const nameRouter = Router();


const FILENAME = './names.txt';
const ENCODING = 'utf-8';

//* Get names
nameRouter.get('/', autho, async function (_req, res, next) {
  try {
    const data = (await fs.readFile(FILENAME, ENCODING)).split('\n');
    const obj = data.map((name, index) => ({ id: index + 1, name }));
    return res.status(200).json(obj);

  } catch (error) {
    next(error); // ele vai direcionar para o middleware de error
  };
});

//* Post names
nameRouter.post('/', autho, async function (req, res) {
  const { name } = req.body;
  await fs.appendFile(FILENAME, `\n${name}`)
  return res.status(201).end();
});

module.exports = nameRouter;