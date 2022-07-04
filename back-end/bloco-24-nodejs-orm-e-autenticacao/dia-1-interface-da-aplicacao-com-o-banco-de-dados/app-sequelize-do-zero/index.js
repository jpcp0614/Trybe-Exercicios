require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

const { storeRoutes } = require('./routers/index.routes');

app.use('/store', storeRoutes);

app.listen(process.env.PORT, () => console.log(`Ouvindo na porta ${process.env.PORT}`));