const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");
const multer = require('multer');
const unzipper = require('unzipper');
const fs = require('fs');

const multerStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'tmp/my-uploads')
  },
  filename: function (req, file, cb) {
    const ext = file.mimetype.split('/')[1];
    cb(null, file.fieldname + '-' + Date.now() + '.' + ext)
  }
})

const multerFilter = (req, file, cb) => {
  if (file.mimetype === 'application/zip') {
    cb(null, true);
  } else {
    cb(new AppError('Not an zip! Please upload only zip.', 400), false);
  }
};

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});

exports.uploadZipFile = upload.single('zippedTheme');
exports.handleZippedTheme = catchAsync(async (req, res, next)=>{

  await fs.createReadStream(`tmp/my-uploads/${req.file.filename}`)
  .pipe(unzipper.Extract({ path: `html-theme-uploads/${req.file.filename}` }));

  

  return res.status(204).json({
    status: 'success',
    data: null,
  });
  


})