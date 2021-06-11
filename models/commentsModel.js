const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentsSchema = new Schema({
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Comment',
    },
  ],
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },

  post: {
    type: Schema.Types.ObjectId,
    ref: 'Post',
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Comments = mongoose.model('Comments', commentsSchema);
