const express = require('express');
const bodyParser = require('body-parser');
const nameRouter = require('./nameRouter');
const autho = require('./auth');
const logger = require('./logger');
// const rescue = require('express-rescue');

const app = express();
app.use(bodyParser.json());

//* Token
app.post('/login', function (req, res) {
  let token = Array.from({ length: 10 })
    .map((_e) => String.fromCharCode(64 + Math.random() * 26));
  return res.status(200).json({ token: token.join('') });
});

//* Hello security
const pipeLine = [ autho, logger ]; //* outro modo de fazer
app.get('/secure/hello', pipeLine, function (_req, res) {
  return res.status(200).send({ message: 'Hello World!' });
});

//* Hello logger
app.get('/hello', logger, function (_req, res) {
  return res.status(200).send({ message: 'Hello World!' });
});

//* Routers
app.use('/names', nameRouter);

//* Middleware que lida com error
app.use((error, _req, res, _next) => {
  return res.status(500).send({ message: error.message });
});


app.listen(3000, () => {
  console.log('App listening on port 3000');
});

/*
const array = [
  { id: 1, name: 'João Paulo' },
  { id: 2, name: 'Pedro Henrique' }
]
*/