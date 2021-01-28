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
    console.log(req.file.filename)
  fs.createReadStream(`tmp/my-uploads/${req.file.filename}`)
  .pipe(unzipper.Parse())
  .on('entry', function (entry) {
    const fileName = entry.path;
    const type = entry.type; // 'Directory' or 'File'
    const size = entry.vars.uncompressedSize; // There is also compressedSize;
    if (fileName === `${req.file.filename}`) {
      entry.pipe(fs.createWriteStream('html-theme-uploads'));
    } else {
      entry.autodrain();
    }
  });
})