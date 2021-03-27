const catchAsync = require('./catchAsync');
const fs = require('fs').promises;
const fileType = require('file-type');

module.exports = catchAsync(async (req, res, next) => {
  //check file type
  const zipFileCheck = await fileType.fromFile(
    `./tmp/my-uploads/${req.file.filename}`
  );

  //check zip file
  if (!zipFileCheck || zipFileCheck.mime !== 'application/zip') {
    //delete tmp uploaded zip file
    await fs.unlink(`./tmp/my-uploads/${req.file.filename}`);
    return res.status(201).json({
      status: 'Failed',
      message: 'Not a zip file! Upload only zip',
    });
  }

  next();
});
