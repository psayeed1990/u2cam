const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reactSchema = new Schema({
  reacts: [
    {
      by: {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
      reacttype: {
        type: String,
        enum: ['like', 'happy', 'sad', 'angry', 'care', 'love'],
      },
    },
  ],

  post: {
    type: Schema.Types.ObjectId,
    ref: 'Post',
  },
  comment: {
    type: Schema.Types.ObjectId,
    ref: 'Comment',
  },
  reply: {
    type: Schema.Types.ObjectId,
    ref: 'Reply',
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = React = mongoose.model('React', reactSchema);
