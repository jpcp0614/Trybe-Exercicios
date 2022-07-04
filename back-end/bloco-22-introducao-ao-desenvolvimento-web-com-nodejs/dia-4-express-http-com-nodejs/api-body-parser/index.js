const bodyParser = require('body-parser');
const express = require('express');
const app = express();


app.use(bodyParser.json());

const technologies = [
  { id: 1, name: 'HTML5' },
  { id: 2, name: 'CSS3' },
  { id: 3, name: 'JavaScript' },
  { id: 4, name: 'MySQL' }
];

app.get('/', function (_req, res) {
  return res.status(200).send('Minhas tecnologias');
});

app.get('/techs', function (_req, res) {
  return res.status(200).send(technologies)
});

app.post('/techs', function (req, res) {
  const { id, name } = req.body;
  technologies.push({ id, name });
  return res.status(201).send(`${ id } - ${ name } tech has been added`)
});

app.listen(3000, () => {
  console.log('App listening to port 3000');
});