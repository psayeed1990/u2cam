const express = require("express");
const adminController = require("./../controllers/adminController");
const authController = require("./../controllers/authController");

const router = express.Router();

router.use(authController.protect);
router.use(authController.restrictTo("admin"));

router.route("/users/create").post(adminController.createAdminUser);

module.exports = router;
