const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: [true, ' is required'],
  },
  privacy: {
    type: String,
    enum: [
      'public',
      'friends',
      'friends and followers',
      'followers',
      'anonymous',
      'group',
      'pages',
    ],
    required: [true, ' is required'],
  },
  text: {
    type: String,
    minlength: [1, 'Post must be at least 1 characters long'],
  },
  photo: {
    type: String,
  },
  gif: {
    type: String,
  },
  video: {
    type: String,
  },
  audio: {
    type: String,
  },
  traveling: {
    type: String,
  },
  file: {
    type: String,
  },
  listening: {
    type: String,
  },
  watching: {
    type: String,
  },
  product: {
    type: Schema.Types.ObjectId,
    ref: 'Product',
  },
  category: {
    type: String,
    enum: [
      'text',
      'photo',
      'gif',
      'video',
      'product',
      'traveling',
      'playing',
      'listening',
      'watching',
      'file',
      'audio',
    ],
    required: [true, ' is required'],
  },
  sharedpost: {
    type: Schema.Types.ObjectId,
    ref: 'Post',
  },
  group: {
    type: Schema.Types.ObjectId,
    ref: 'Group',
  },
  page: {
    type: Schema.Types.ObjectId,
    ref: 'Page',
  },
  comments: {
    type: Schema.Types.ObjectId,
    ref: 'Comments',
  },

  reacts: {
    type: Schema.Types.ObjectId,
    ref: 'Reacts',
  },
  commentcount: {
    type: Number,
    default: 0,
  },
  reactcount: {
    type: Number,
    default: 0,
  },
  liked: {
    type: Boolean,
    default: false,
  },
  loved: {
    type: Boolean,
    default: false,
  },
  angry: {
    type: Boolean,
    default: false,
  },
  sad: {
    type: Boolean,
    default: false,
  },
  happy: {
    type: Boolean,
    default: false,
  },
  cared: {
    type: Boolean,
    default: false,
  },

  location: {
    name: {
      type: String,
      minlength: [1, ' must be at least 2 characters long'],
    },
    longitude: String,
    lattitude: String,
  },
  notificationlist: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
      createdAt: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

postSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'user',
    select: '-__v',
  });

  next();
});

postSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'reacts',
    select: '-__v',
  });

  next();
});

module.exports = Post = mongoose.model('Post', postSchema);
