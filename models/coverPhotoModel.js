const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const coverPhotoSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
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

module.exports = CoverPhoto = mongoose.model('CoverPhoto', coverPhotoSchema);
