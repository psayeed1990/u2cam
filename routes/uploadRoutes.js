const express = require('express');
const checkIndexHTML = require('../utils/checkIndexHTML');
const checkZipFile = require('../utils/checkZipFile');
const clamScan = require('../utils/clamScan');
const unzip = require('../utils/unzip');
const authController = require('./../controllers/authController');
const uploadController = require('./../controllers/uploadController');

const router = express.Router();

//delete bulk
router.post(
  '/bulk-delete',
  authController.protect,
  uploadController.deleteMarkedUploads
);

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
    checkIndexHTML,
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
