const express = require('express');
const checkZipFile = require('../utils/checkZipFile');
const clamScan = require('../utils/clamScan');
const unzip = require('../utils/unzip');
const authController = require('./../controllers/authController');
const uploadController = require('./../controllers/uploadController');

const router = express.Router();

router
  .route('/')
  .get(authController.protect, uploadController.getAllUploads)
  .post(
    authController.protect,
    uploadController.setTimeOutLimit,
    uploadController.uploadZipFile,
    checkZipFile,
    //clamScan,
    unzip,
    uploadController.handleZippedTheme
  );
router
  .route('/:id')
  .get(authController.protect, uploadController.getUpload)
  .patch(
    authController.protect,
    // uploadController.fix__MACOSX_folders,
    uploadController.updateUpload
  )
  .delete(authController.protect, uploadController.deleteUpload);

module.exports = router;
