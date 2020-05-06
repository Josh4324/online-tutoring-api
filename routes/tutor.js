const express = require('express');
const router = express.Router();
const auth = require("../middleware/auth");
const validation = require("../middleware/validation");

const userController = require('../controllers/tutor');


router.get('/', auth.adminAuthorization, userController.getAllTutors);
router.get('/:id', auth.adminAuthorization, userController.getTutorById);

module.exports = router;