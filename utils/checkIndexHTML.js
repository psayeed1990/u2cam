const fs = require('fs').promises;
const mv = require('mv');
const catchAsync = require('./catchAsync');
const rmfr = require('rmfr');

const indexCheckFunction = (filesArray) => {
  return filesArray === 'index.html';
};

const moveToParentFolder = async (files, parentPath) => {
  mv(
    `${parentPath}/${files[0]}/`,
    parentPath,
    { mkdirp: false, clobber: false },
    (err) => {
      if (err) {
        throw err;
      }
    }
  );
};

module.exports = catchAsync(async (req, res, next) => {
  const path = `./html-theme-uploads/${req.file.filename}`;

  const files = await fs.readdir(path);

  //check index.html in root directory
  if (!files.some(indexCheckFunction)) {
    if (files.length === 1) {
      const stat = (await fs.stat(`${path}/${files[0]}`)).isDirectory();
      if (stat) {
        const subFiles = await fs.readdir(`${path}/${files[0]}`);
        if (!subFiles.some(indexCheckFunction)) {
          //remove folder
          await rmfr(path);

          return res.status(401).json({
            status: 'Custom',
            message: 'No index.html found in root directory',
          });
        }

        //move files to root directory
        //await moveToParentFolder(files, path);
      }
    } else {
      //remove folder
      await rmfr(path);

      return res.status(401).json({
        status: 'Custom',
        message: 'No index.html found in root directory',
      });
    }
  }

  next();
});
