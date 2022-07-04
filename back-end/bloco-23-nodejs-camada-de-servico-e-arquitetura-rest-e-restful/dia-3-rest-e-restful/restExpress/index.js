const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

require('dotenv').config();
const PORT = process.env.PORT || 3000;


app.use('/products', require('./controllers/productController'));

app.listen(PORT, () => console.log(`app listening on port ${3000}!`));