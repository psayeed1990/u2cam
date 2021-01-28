const express = require('express');
const authController = require('./../controllers/authController');
const uploadController = require('./../controllers/uploadController')

const router = express.Router();

router.post('/zipped-html-theme', uploadController.uploadZipFile, uploadController.handleZippedTheme)

module.exports = router;