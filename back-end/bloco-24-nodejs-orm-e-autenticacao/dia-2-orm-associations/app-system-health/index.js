require('dotenv').config();
const bodyParser = require('body-parser');
const express = require('express');

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

const errorMiddleware = require('./middlewares/error.middleware');
const {
  patientsPlansRouter,
  patientsSurgeriesRouter,
  planRouter } = require('./routers/index.routes');

app.use('/patientsSurgeries', patientsSurgeriesRouter);

app.use('/', patientsPlansRouter);

app.use('/plan', planRouter);

app.use(errorMiddleware);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Running on port: ${PORT}`);
});