const express = require('express');
const router = express.Router();
const authController = require('./../controllers/authController');
const postController = require('./../controllers/postController');
const commentController = require('./../controllers/commentController');

router.route('/')
    .get(postController.getAllPost)
    .post(authController.protect, authController.restrictTo('admin'), postController.createPost);

router.route('/:id')
    .get(postController.getPost)
    .patch(authController.protect, authController.restrictTo('admin'), postController.editPost)
    .delete(authController.protect, authController.restrictTo('admin'), postController.deletePost);

router.route('/:id/comments')
    .get(commentController.getAllComment)
    .post(authController.protect, commentController.createComment);

router.route('/:id/comments/:cid/')
    .get(commentController.getComment)
    .patch(authController.protect, commentController.editComment)
    .delete(authController.protect, commentController.deleteComment);

module.exports = router;