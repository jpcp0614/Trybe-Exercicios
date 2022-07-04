const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const artistController = require('./controllers/artistController');
const songController =require('./controllers/songController');


app.post('/artist', artistController.create);

app.post('/song', songController.create);

app.get('/songs', songController.getAll);

app.post('/song-with-artist', songController.createSongWithArtist);

const PORT = 3000;
app.listen(PORT, () => console.log(`App listening in port ${PORT}`));

/*

* CONTROLLER -> SERVICE -> MODEL

*/