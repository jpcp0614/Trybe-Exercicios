const express = require('express');
const bodyParser = require('body-parser');
const userRouter = require('./routers/userRouter');
const cors = require('cors');

const PORT = 3000;

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/user', userRouter);

app.listen(PORT, () => console.log('Run server http://3000'))

