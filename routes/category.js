const express = require('express');
const router = express.Router();
const auth = require("../middleware/auth");

const userController = require('../controllers/category');

router.post('/', auth.adminAuthorization, userController.addCategory);
router.put('/:category_name', auth.adminAuthorization, userController.updateCategory);


module.exports = router;