const express = require('express');
const router = express.Router();
const auth = require("../middleware/auth");


const userController = require('../controllers/tutor');


router.get('/', auth.adminAuthorization, userController.getAllTutors);
router.get('/:id', auth.adminAuthorization, userController.getTutorById);
router.get('/:id/subject', auth.tutorAuthorization, userController.getSubjectRegistered);
router.put('/:id/subject/:subject_id',auth.tutorAuthorization, userController.updateRegisteredSubject);
router.patch('/:id', auth.adminAuthorization, userController.makeTutorAdmin);
router.patch('/:id/subject/:subject_id', auth.tutorAuthorization, userController.takeSubjectInCategory);
router.delete('/:id', auth.adminAuthorization, userController.deactivateTutorById);
router.delete('/:id/subject/:subject_id', auth.tutorAuthorization, userController.deleteRegisteredSubject);

module.exports = router;