const factory = require('./handlers/factory');
const Post = require('./../models/postModel');

exports.createPost = factory.createOne(Post);
exports.editPost = factory.updateOne(Post);
exports.deletePost = factory.deleteOne(Post);
exports.getPost = factory.getOne(Post);
exports.getAllPost = factory.getAll(Post);