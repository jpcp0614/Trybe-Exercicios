//* Exercises

const express = require('express');
const cepController = require('./controllers/cepController');
const bodyParser = require('body-parser');
const app = express();
require('dotenv').config();
app.use(bodyParser.json());


//* APP GET PING
app.get('/ping', function (req, res) {
  return res.status(200).json({ message: 'pong!' })
});


//* APP GET CEP
app.get('/cep/:cep', cepController.findAddressByCep);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening in port ${PORT}`))