const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const followerSchema = new Schema({
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

module.exports = Follower = mongoose.model('Follower', followerSchema);
