const express = require('express');
const router = express.Router();
const authController = require('./../controllers/authController');
const categoryController = require('./../controllers/categoryController');

router.route('/')
    .get(categoryController.getAllCategories);

router.route('/:id')
    .get(categoryController.getCategory)
    .post(authController.protect, authController.restrictTo('admin'), categoryController.createCategory)
    .patch(authController.protect, authController.restrictTo('admin'), categoryController.editCategory)
    .delete(authController.protect, authController.restrictTo('admin'), categoryController.deleteCategory);

module.exports = router;