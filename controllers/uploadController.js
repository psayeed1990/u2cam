const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');
const multer = require('multer');
const unzipper = require('unzipper');
const fs = require('fs');
const Upload = require('../models/uploadModel');
const factory = require('./handlers/factory');
const decompress = require('decompress');

const multerStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'tmp/my-uploads');
  },
  filename: function (req, file, cb) {
    const ext = file.mimetype.split('/')[1];
    cb(null, file.fieldname + '-' + Date.now() + '.' + ext);
  },
});

const multerFilter = (req, file, cb) => {
  if (file.mimetype === 'application/zip') {
    cb(null, true);
  } else {
    cb(new AppError('Not an zip! Please upload only zip.', 400), false);
  }
};

//upload zipped theme with multer
const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});

exports.uploadZipFile = upload.single('zippedTheme');
exports.handleZippedTheme = catchAsync(async (req, res, next) => {
  //extract zipped theme here
  await fs
    .createReadStream(`tmp/my-uploads/${req.file.filename}`)
    .pipe(
      unzipper.Extract({ path: `html-theme-uploads/${req.file.filename}` })
    );

  // await decompress(
  //   `tmp/my-uploads/${req.file.filename}`,
  //   `html-theme-uploads/${req.file.filename}`
  // );

  const newUpload = await Upload.create({
    name: req.file.filename,
    link: `html-theme-uploads/${req.file.filename}`,
    type: 'html',
    visibility: 'private',
    user: req.user,
  });
  console.log(newUpload);
  return res.status(201).json({
    status: 'success',
    data: {
      data: newUpload,
    },
  });
});

//get all by users

//get uploaded files
exports.getAllUploads = factory.getAll(Upload, true);
exports.getUpload = factory.getOne(Upload, true);

exports.updateUpload = factory.updateOne(Upload, true);
exports.deleteUpload = factory.deleteOne(Upload, true);
