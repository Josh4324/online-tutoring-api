const express = require('express');
const router = express.Router();
const auth = require("../middleware/auth");
const validation = require("../middleware/validation");

const userController = require('../controllers/category');

router.get('/', auth.adminAuthorization, userController.getAllCategories);
router.post('/', auth.adminAuthorization, validation.categoryPostValidationRules(), validation.validate, userController.addCategory);
router.post('/:category_name/subject', auth.adminAuthorization, validation.subjectPostValidationRules(), validation.validate, userController.addSubject);
router.put('/:category_name', auth.adminAuthorization, validation.categoryPostValidationRules(), validation.validate, userController.updateCategory);
router.delete('/:category_name', auth.adminAuthorization, userController.deleteCategory);

module.exports = router;