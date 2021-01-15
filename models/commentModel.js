const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newComment = new Schema({
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: [true, 'User is required'],
    },

    post: {
        type: mongoose.Schema.ObjectId,
        ref: 'Post',
        required: [true, 'Post ID is required'],
    },

    body: {
        type: String,
        required: [true, 'Can\'t have a empty comment'],
    },
    
    parentComment: {
        type: mongoose.Schema.ObjectId,
        ref: 'Comment',
    },

    childComments:[ 
        {
            type: mongoose.Schema.ObjectId,
            ref: 'Comment',
        },
    ],

    createdAt: {
        type: Date,
        default: Date.now,
    },
});

newComment.pre(/^find/, function (next) {
    this.populate({
      path: 'user',
      select: '-__v',
    });
  
    next();
  });

module.exports = Comment = mongoose.model('Comment', newComment);