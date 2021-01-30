const express = require('express');
const adminController = require('./../controllers/adminController');
const authController = require('./../controllers/authController');

const router = express.Router();

router.use(authController.restrictTo('admin'));

router
  .route('/').post(adminController.createAdminUser);


module.exports = router;