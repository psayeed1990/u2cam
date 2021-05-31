const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const groupSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  members: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
  joinrequest: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
  privacy: {
    type: String,
    enum: ['public', 'private'],
  },
  profilephoto: {
    type: String,
    default: 'default.jpg',
  },
  profilephotolist: {
    type: Schema.Types.ObjectId,
    ref: 'GroupProfilePhoto',
  },
  coverphotolist: {
    type: Schema.Types.ObjectId,
    ref: 'GroupCoverPhoto',
  },
  coverphoto: {
    type: String,
    default: 'default.jpg',
  },
  post: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Post',
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Groups = mongoose.model('Group', groupSchema);
