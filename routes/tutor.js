const express = require('express');
const router = express.Router();
const auth = require("../middleware/auth");


const userController = require('../controllers/tutor');


router.get('/', auth.adminAuthorization, userController.getAllTutors);
router.get('/:id', auth.adminAuthorization, userController.getTutorById);
router.patch('/:id', auth.adminAuthorization, userController.makeTutorAdmin);
router.patch('/:id/subject/:subject_id', auth.tutorAuthorization, userController.takeSubjectInCategory);
router.delete('/:id', auth.adminAuthorization, userController.deactivateTutorById);

module.exports = router;