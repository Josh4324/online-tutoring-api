const express = require('express');
const router = express.Router();
const auth = require("../middleware/auth");
const validation = require("../middleware/validation");



const userController = require('../controllers/search');

router.get('/subject', auth.authentication,userController.searchBySubjectName);
router.get('/tutors', auth.authentication,userController.searchByTutorFirstName);

module.exports = router;