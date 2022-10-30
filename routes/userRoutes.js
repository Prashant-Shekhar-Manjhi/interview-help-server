const express = require('express');
const router = express.Router();
const userControllers = require('./../controllers/userControllers');
const authController = require('./../controllers/authController');

router.route('/signup').post(authController.signUp);
router.route('/login').post(authController.logIn);

router.route('/').get(userControllers.example);

module.exports = router;