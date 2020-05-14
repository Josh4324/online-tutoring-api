const express = require('express');
const router = express.Router();
const validation = require("../middleware/validation");

//user controller
const userController = require('../controllers/user');

router.post('/signup', validation.signUpValidationRules(), validation.validate, userController.signUp);
router.post('/login', validation.loginValidationRules(), validation.validate, userController.logIn)


module.exports = router;