const factory = require('./handlers/factory');
const Comment = require('./../models/commentModel');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');

exports.createComment = factory.createOne(Comment);
exports.editComment = factory.updateOne(Comment);
exports.deleteComment = factory.deleteOne(Comment);
exports.getComment = factory.getOne(Comment);


exports.getAllComment = catchAsync(async (req, res, next) => {
    let query = Comment.find({post: req.params.id});
    const doc = await query;
    if (!doc) {
        return next(new AppError('No document found with that ID', 404));
    }

    res.status(200).json({ 
        status: 'success',
        data: {
        data: doc,
        },
    });
});