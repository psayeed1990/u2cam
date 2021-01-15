const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newPost = new Schema({
    title: {
        type: String,
        maxLength: 300,
        minLength: 3,
        trim: true,
        required: [true, 'Blog post title is required'],
    },

    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: [true, 'User is required to create a post'],
    },

    category: {
        type: mongoose.Schema.ObjectId,
        ref: 'Category',
        //required: [true, 'Category is required to create a post'],
    },

    content: {
        type: String,
        required: [true, "Blog should have a content"],
    },

    comments: {
        type: mongoose.Schema.ObjectId,
        ref: 'Comment',
    },

    createdAt: {
        type: Date,
        default: Date.now,
    }

})

module.exports = Post = mongoose.model('Post', newPost);