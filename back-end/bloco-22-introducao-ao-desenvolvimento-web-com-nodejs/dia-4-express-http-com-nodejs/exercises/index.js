const express = require('express');
const bodyParser = require('body-parser');
const fsSimpsons = require('./fsSimpsons');
const rescue = require('express-rescue');
const generateToken = require('./generateToken');
const autho = require('./autho');

const app = express();
const pipeLine = [autho]

app.use(bodyParser.json());

//* Gerar token
app.post('/token', function (_req, res) {
  const token = generateToken();
  return res.status(200).json({ message: token })
});

//* Exercise 1
app.get('/ping', pipeLine, function (_req, res) {
  return res.status(200).json({ message: 'pong' });
});

//* Exercise 2
app.post('/hello', pipeLine, function (req, res) {
  const { name } = req.body;
  return res.status(200).json({ message: `Hello, ${name}!` });
});

//* Exercise 3
app.post('/greetings', pipeLine, function (req, res) {
  const { name, age } = req.body;

  if (parseInt(age) <= 17) return res.status(401).json({ message: 'Unauthorized' });
  return res.status(200).json({ message: `Hello, ${name}!` });
});

//* Exercise 4
app.put('/users/:name/:age', function (req, res) {
  const { name, age } = req.params;
  return res.status(200).json({ message: `Seu nome é ${name} e você tem ${age} anos de idade` })
});

//* Exercise 6
app.get('/simpsons', rescue (async function (_req, res) {
  const theSimpsons = await fsSimpsons.getSimpsons();
  return res.status(200).json(theSimpsons);
}));

//* Exercise 7
app.get('/simpsons/:id', rescue (async function (req, res) {
  const { id } = req.params;
  const theSimpsons = await fsSimpsons.getSimpsons();
  const findSimpsonsId = theSimpsons.find(simp => simp.id === id);

  if (!findSimpsonsId) return res.status(404).json({ message: 'simpson not found'});
  return res.status(200).json(findSimpsonsId);
}));

//* Exercise 8
app.post('/simpsons', rescue (async function (req, res) {
  const { id, name } = req.body;
  const theSimpsons = await fsSimpsons.getSimpsons();
  const verifyId = theSimpsons.find(simp => simp.id.includes(id));

  if (verifyId) return res.status(409).json({ message: 'id already exists'});

  theSimpsons.push({ id, name });

  await fsSimpsons.setSimpsons(theSimpsons);

  return res.status(200).end();
}));

//* Middleware que lida com error
app.use((error, _req, res, _next) => {
  return res.status(500).send({ message: error.message });
});

app.listen(3000, () => {
  console.log('App listening on port 3000');
});