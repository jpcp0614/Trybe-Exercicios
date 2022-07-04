require('dotenv').config();
const bodyParser = require('body-parser');
const express = require('express');

const app = express();
app.use(bodyParser.json());
const PORT = process.env.PORT || 3000;

const { errorMiddleware } = require('./middlewares/index.middlewares');
const { usersRouter, loginRouter } = require('./routers/index.routes');

app.use('/users', usersRouter);

app.use('/login', loginRouter);

app.use(errorMiddleware);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));