const express = require('express');
const router = express.Router();

const patientsPlansController = require('../controllers/patientsPlans.controller');

router.get('/', patientsPlansController.getAllPatients);

router.get('/patientsPlans', patientsPlansController.getAllPatientsPlans);

router.get('/:id', patientsPlansController.getPatientById)

module.exports = router;