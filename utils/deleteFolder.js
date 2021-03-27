const fs = require('fs').promises;
const Path = require('path');

module.exports = async (directoryPath)=> {
  if (await fs.exists(directoryPath)) {
    await fs.readdir(directoryPath).forEach((file, index) => {
      const curPath = path.join(directoryPath, file);
      if (await fs.lstat(curPath).isDirectory()) {
        // recurse
        await deleteFolderRecursive(curPath);
      } else {
        // delete file
        await fs.unlink(curPath);
      }
    });
    await fs.rmdir(directoryPath);
  }
};
