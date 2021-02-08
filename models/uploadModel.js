const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const uploadSchema = new Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
  },
  name: {
    type: String,
    trim: true,
    required: [true, 'Theme Name is required'],
  },
  link: {
    type: String,
    trim: true,
    required: [true, 'Link of theme is required'],
  },
  type: {
    type: String,
    required: true,
    enum: ['html', 'wp'],
  },
  visibility: {
    type: String,
    enum: ['public', 'private'],
    default: 'public',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Upload = mongoose.model('Upload', uploadSchema);
