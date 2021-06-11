const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  text: {
    type: String,
    minlength: [1, 'Comment must be at least 1 characters long'],
  },

  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },

  post: {
    type: Schema.Types.ObjectId,
    ref: 'Post',
  },

  replies: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Reply',
    },
  ],

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Comment = mongoose.model('Comment', commentSchema);
