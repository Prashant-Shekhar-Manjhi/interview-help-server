const express = require('express');
const router = express.Router();
const authController = require('./../controllers/authController');
const userController = require("./../controllers/userControllers");

router.route('/signup').post(authController.signUp);
router.route('/login').post(authController.logIn);
router.route("/:id").get(userController.getUserById);


module.exports = router;