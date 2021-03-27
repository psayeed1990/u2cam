const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');
const multer = require('multer');
const fs = require('fs').promises;
const Upload = require('../models/uploadModel');
const factory = require('./handlers/factory');
const checkIndexHTML = require('../utils/checkIndexHTML');

exports.setTimeOutLimit = (req, res, next) => {
  req.socket.setTimeout(10 * 60 * 1000);
  next();
};

const multerStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'tmp/my-uploads');
  },
  filename: function (req, file, cb) {
    // const ext = file.mimetype.split('/')[1];
    cb(null, file.fieldname + '-' + Date.now());
  },
});

// const multerFilter = (req, file, cb) => {
//   const buffer = readChunk.sync(file, 0, 4100);
//   if (fileType(buffer).ext == 'zip') {
//     cb(null, true);
//   } else {
//     cb(new AppError('Not an zip! Please upload only zip.', 400), false);
//   }
// };

//upload zipped theme with multer
const upload = multer({
  storage: multerStorage,
  // fileFilter: multerFilter,
});

exports.uploadZipFile = upload.single('zippedTheme');
exports.handleZippedTheme = catchAsync(async (req, res, next) => {
  //check index file

  const themeName = await req.file.originalname.split('.');
  await themeName.pop();

  const newUpload = await Upload.create({
    name: themeName.join('.'),
    filename: req.file.filename,
    link: `html-theme-uploads/${req.file.filename}`,
    type: 'html',
    visibility: 'private',
    user: req.user,
  });

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
