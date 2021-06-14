const express = require('express');
const router = express.Router();
const authController = require('./../controllers/authController');
const postController = require('./../controllers/postController');
const reactsController = require('./../controllers/reactsController');

router
  .route('/')
  .get(postController.getAllPosts)
  .post(authController.protect, reactsController.createReacts);

router
  .route('/:id')
  .get(postController.getPost)
  .patch(authController.protect, postController.updatePost)
  .delete(authController.protect, postController.deletePost);

module.exports = router;
