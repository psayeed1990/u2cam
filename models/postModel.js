const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  text: {
    type: String,
    minlength: [1, 'First Name must be at least 2 characters long'],
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
