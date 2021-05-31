const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const friendsSchema = new Schema({
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

module.exports = FreindsSchema = mongoose.model('FrinedsSchema', friendsSchema);
