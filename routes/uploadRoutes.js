const express = require('express');
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
