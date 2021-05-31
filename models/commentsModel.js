const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentsSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  text: {
    type: String,
    minlength: [1, 'Comment must be at least 1 characters long'],
  },

  post: {
    type: Schema.Types.ObjectId,
    ref: 'POST',
  },
  photo: {
    type: String,
  },
  replies: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
      text: {
        type: String,
        minlength: [1, 'Reply must be at least 1 characters long'],
      },
      photo: {
        type: String,
      },
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

module.exports = Comments = mongoose.model('Comments', commentsSchema);
