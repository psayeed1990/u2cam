const express = require('express');
const router = express.Router();
const authController = require('./../controllers/authController');
const postController = require('./../controllers/postController');

router
  .route('/')
  .get(postController.getAllPosts)
  .post(authController.protect, postController.createPost);

router
  .route('/:id')
  .get(postController.getPost)
  .patch(authController.protect, postController.updatePost)
  .delete(authController.protect, postController.deletePost);

router.route('/:id/comments').get();
module.exports = router;
