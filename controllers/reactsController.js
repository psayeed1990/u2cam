const multer = require('multer');
const sharp = require('sharp');
const Post = require('../models/postModel');
const Reacts = require('../models/reactsModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const factory = require('./handlers/factory');
const Profile = require('../models/profileModel');

exports.getAllReacts = factory.getAll(Post);

//Create react function
exports.createReacts = catchAsync(async (req, res, next) => {
  const reacts = await Reacts.findById(req.body.reacts);
  const post = await Post.findById(req.body.post);

  let ifChangeReact = false;
  reacts.reacts.map((react, index) => {
    if (react.by == req.user.id) {
      if (react.reacttype == req.body.reacttype) {
        //remove that react
        reacts.reacts.splice(index, 1);
        if (post.reactcount > 0) {
          post.reactcount = post.reactcount - 1;
        } else {
          post.reactcount = 0;
        }

        return (ifChangeReact = true);
      } else {
        //change react
        reacts.reacts[index].reacttype = req.body.reacttype;
        return (ifChangeReact = true);
      }
    }
  });

  if (ifChangeReact) {
    // save react
    const newReacts = await reacts.save();
    const newPost = await post.save({ new: true });

    return res.json({
      status: 'success',
      data: {
        data: newPost,
      },
    });
  }

  reacts.reacts.push({
    by: req.user.id,
    reacttype: req.body.reacttype,
  });

  await reacts.save();

  if (req.body.reacttype === 'like') {
    const profile = await Profile.findOne({ user: req.user.id });

    profile.likedcount = profile.likedcount + 1;
    await profile.save();
  }

  post.reactcount = post.reactcount + 1;
  const newPost = await post.save();

  return res.json({
    status: 'success',
    data: {
      data: newPost,
    },
  });
});

exports.getReacts = factory.getOne(Reacts);
exports.updateReacts = factory.updateOne(Reacts);
exports.deleteReacts = factory.deleteOne(Reacts);
exports.deleteMarkedReacts = factory.deleteMarked(Reacts);
