const multer = require('multer');
const sharp = require('sharp');
const Post = require('../models/postModel');
const Reacts = require('../models/reactsModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const factory = require('./handlers/factory');
const Profile = require('../models/profileModel');

exports.getAllReacts = factory.getAll(Post);

//Create post function
exports.createReacts = catchAsync(async (req, res, next) => {
  //create new post
  const reacts = await Reacts.findById(req.body.reacts);

  reacts.reacts.push({
    by: req.user.id,
    reacttype: req.body.reacttype,
  });

  await reacts.save();

  if (req.body.reacttype === 'like') {
    const profile = await Profile.findOne({ user: req.user.id });
    console.log(profile);
    profile.likedcount = profile.likedcount + 1;
    await profile.save();
  }

  const post = await Post.findById(req.body.post);
  console.log(post);
  post.reactcount = post.reactcount + 1;
  await post.save();

  return res.json({
    status: 'success',
  });
});

exports.getReacts = factory.getOne(Reacts);
exports.updateReacts = factory.updateOne(Reacts);
exports.deleteReacts = factory.deleteOne(Reacts);
exports.deleteMarkedReacts = factory.deleteMarked(Reacts);
