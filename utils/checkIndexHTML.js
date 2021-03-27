const fs = require('fs').promises;
const catchAsync = require('./catchAsync');

const fileExists = async (path) => !!(await fs.stat(path).catch((e) => false));

module.exports = catchAsync(async (req, res, next) => {
  const path = `./html-theme-uploads/${req.file.filename}/index.html`;

  const indexFileExists = await fileExists(path);

  if (!indexFileExists) {
    return res.status(401).json({
      status: 'Failed',
      message: 'No index.html found in root directory',
    });
  }

  next();
});
