const multer = require('multer');
const sharp = require('sharp');
const Post = require('./../models/postModel');
const Comments = require('./../models/commentsModel');
const Reacts = require('./../models/reactsModel');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');
const factory = require('./handlers/factory');

exports.getAllPosts = factory.getAll(Post);

//Create post function
exports.createPost = catchAsync(async (req, res, next) => {
  //create new post
  const newPost = new Post({
    user: req.user.id,
    privacy: req.body.privacy,
    text: req.body.text,
    category: 'text',
  });

  const post = await newPost.save();

  const newComments = new Comments({
    user: req.user.id,
    post: post.id,
    comments: [],
  });

  const newReacts = new Reacts({
    user: req.user.id,
    post: post.id,
    reacts: [],
  });

  const comments = await newComments.save();
  const reacts = await newReacts.save();

  post.comments = comments.id;
  post.reacts = reacts.id;

  await post.save();

  return res.json({
    status: 'success',
    data: {
      post: newPost,
    },
  });
});

exports.getPost = factory.getOne(Post);
exports.updatePost = factory.updateOne(Post);
exports.deletePost = factory.deleteOne(Post);
exports.deleteMarkedPosts = factory.deleteMarked(Post);
