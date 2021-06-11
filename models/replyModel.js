const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const replySchema = new Schema({
  text: {
    type: String,
    minlength: [1, 'Reply must be at least 1 characters long'],
  },

  comment: {
    type: Schema.Types.ObjectId,
    ref: 'Comment',
  },

  post: {
    type: Schema.Types.ObjectId,
    ref: 'POST',
  },

  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },

  photo: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Reply = mongoose.model('Reply', replySchema);
