const express = require('express');
const router = express.Router();
const homeController = require('../controller/homeController');

router.get('/', homeController.homePage);

router.get('/danh-muc', homeController.categoryAll);

router.get('/gioi-thieu', homeController.aboutPage);

module.exports = router;
