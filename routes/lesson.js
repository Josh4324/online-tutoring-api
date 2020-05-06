const express = require('express');
const router = express.Router();
const auth = require("../middleware/auth");
const validation = require("../middleware/validation");

const userController = require('../controllers/lesson');


router.post('/', auth.adminAndSudentAuthorization, validation.bookPostValidationRules(), validation.validate, userController.bookLesson);


module.exports = router;