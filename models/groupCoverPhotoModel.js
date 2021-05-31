const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const groupCoverPhotoSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },

  group: {
    type: Schema.Types.ObjectId,
    ref: 'Group',
  },

  list: [
    {
      type: String,
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

module.exports = GroupCoverPhoto = mongoose.model(
  'GroupCoverPhoto',
  groupCoverPhotoSchema
);
