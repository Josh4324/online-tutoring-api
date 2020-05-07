const express = require('express');
const router = express.Router();
const auth = require("../middleware/auth");


const userController = require('../controllers/student');

router.get('/tutors/subject_id', auth.authentication, userController.getAllTutorsSubject);


module.exports = router;