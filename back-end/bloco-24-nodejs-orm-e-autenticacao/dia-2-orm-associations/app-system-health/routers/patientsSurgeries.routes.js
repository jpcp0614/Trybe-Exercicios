const express = require('express');
const router = express.Router();

const patientsSurgeriesController = require('../controllers/patientsSurgeries.controller');

router.get('/', patientsSurgeriesController.getAllPatientsSurgeries);

module.exports = router;