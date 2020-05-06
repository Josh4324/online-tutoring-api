const express = require('express');
const router = express.Router();
const auth = require("../middleware/auth");
const validation = require("../middleware/validation");



const userController = require('../controllers/search');

router.get('/subject', userController.searchBySubjectName);

module.exports = router;