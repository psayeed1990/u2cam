const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reactsSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
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
  share: {
    type: Schema.Types.ObjectId,
    ref: 'Reply',
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Reacts = mongoose.model('Reacts', reactsSchema);
