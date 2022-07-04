require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const { booksRoutes, authorsRoutes } = require('./routers/index.routes');
const { errorMiddleware } = require('./middlewares/index.middleware');

const app = express();
app.use(bodyParser.json());

app.use('/books', booksRoutes);

app.use('/author', authorsRoutes);

app.use(errorMiddleware);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening on port ${PORT}`));