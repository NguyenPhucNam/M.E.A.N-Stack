"use strict";

const express = require('express');
const router = express.Router();
const accountController = require('../controller/accountController');

router.post('/dang-nhap', accountController.post_Signin);

router.post('/dang-ky', accountController.post_Signup);

router.get('/dang-xuat', accountController.get_Logout);

router.get('/ho-so/:id', accountController.get_Profile);

module.exports = router;