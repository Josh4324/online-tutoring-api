const express = require('express');
const router = express.Router();
const auth = require("../middleware/auth");
const validation = require("../middleware/validation");

const userController = require('../controllers/lesson');

router.get('/', auth.adminAuthorization, userController.getAllLessons);
router.get('/:id', auth.adminAuthorization, userController.getLessonById);
router.post('/', auth.adminAndSudentAuthorization, validation.bookPostValidationRules(), validation.validate, userController.bookLesson);
router.put('/:id', auth.adminAuthorization, validation.bookPostValidationRules(),validation.validate, userController.updateLessonById);
router.delete('/:id',auth.adminAuthorization, userController.deleteLessonById);
module.exports = router;