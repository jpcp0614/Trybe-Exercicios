const express = require('express');
const router = express.Router();
const storeController = require('../controllers/storeController');

router.get('/', storeController.findAll);

router.post('/', storeController.create);

module.exports = router;

