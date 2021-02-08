const express = require('express');
const authController = require('./../controllers/authController');
const themeController = require('./../controllers/themeController');

const router = express.Router();

router.route('/:id').get(authController.protect, themeController.getTheme);

module.exports = router;
