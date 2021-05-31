const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
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
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Comment',
    },
  ],
  location: {
    name: {
      type: String,
      minlength: [1, 'Location name must be at least 2 characters long'],
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

module.exports = Post = mongoose.model('Post', postSchema);
