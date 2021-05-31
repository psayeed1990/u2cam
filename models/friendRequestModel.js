const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const friendRequestSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },

  list: [
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

module.exports = FriendReuest = mongoose.model(
  'FriendReuest',
  friendRequestSchema
);
