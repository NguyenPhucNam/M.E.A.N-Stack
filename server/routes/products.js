const express = require('express');
const router = express.Router();
const productsController = require('../controller/productsController');

router.get('/chi-tiet/:id', productsController.product_Details);

module.exports = router;