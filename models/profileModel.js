const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },

  post: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Post',
    },
  ],

  coverphoto: {
    type: String,
    default: 'default.jpg',
  },
  coverphotolist: {
    type: Schema.Types.ObjectId,
    ref: 'CoverPhoto',
  },
  profilephoto: {
    type: String,
    default: 'default.jpg',
  },
  profilephotolist: {
    type: Schema.Types.ObjectId,
    ref: 'ProfilePhoto',
  },

  school: {
    type: String,
    trim: true,
    maxlength: [72, 'School must be maximum 72 characters long'],
    minlength: [2, 'School name must be at least 2 characters long'],
  },
  schoolcompleted: {
    type: Boolean,
    default: false,
  },
  workplace: {
    type: String,
    trim: true,
    maxlength: [72, 'Work place must be maximum 72 characters long'],
    minlength: [2, 'Work place must be at least 2 characters long'],
  },
  website: {
    type: String,
    trim: true,
    maxlength: [72, 'Website URL must be maximum 72 characters long'],
    minlength: [2, 'Website URL must be at least 2 characters long'],
  },
  relationships: {
    type: String,
    enum: [
      'none',
      'Single',
      'In a relationship',
      'Married',
      'Engaged',
      'Divorced',
      'Widowed',
    ],
    default: 'none',
  },
  address: {
    type: String,
    minlength: [2, 'Address must be at least 2 characters long'],
  },
  zipcode: {
    type: String,
  },
  cityOrTown: {
    type: String,
    minlength: [2, 'City or town must be at least 2 characters long'],
  },
  state: {
    type: String,
    minlength: [2, 'State must be at least 2 characters long'],
  },
  country: {
    type: String,
    minlength: [2, 'Country must be at least 2 characters long'],
  },
  birthday: {
    type: Date,
  },
  lastseen: {
    type: Date,
  },
  followercount: {
    type: Number,
    default: 0,
  },
  followingcount: {
    type: Number,
    default: 0,
  },

  unreadmessagecount: {
    type: Number,
    default: 0,
  },

  unreadnotificationcount: {
    type: Number,
    default: 0,
  },

  likedcount: {
    type: Number,
    default: 0,
  },
  sharedcount: {
    type: Number,
    default: 0,
  },
  pagecount: {
    type: Number,
    default: 0,
  },
  groupcount: {
    type: Number,
    default: 0,
  },
  albumcount: {
    type: Number,
    default: 0,
  },
  friendrequestcount: {
    type: Number,
    default: 0,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Profile = mongoose.model('Profile', profileSchema);
