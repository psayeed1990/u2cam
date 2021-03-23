const Upload = require('../models/uploadModel');
const catchAsync = require('../utils/catchAsync');
const path = require('path');
const fs = require('fs');
const dirTree = require('directory-tree');

exports.getTheme = catchAsync(async (req, res, next) => {
  const upload = await Upload.findById(req.params.id);

  const tree = dirTree(`${upload.link}/`);
  tree.themeName = upload.name;

  // upload.link = tree.children[0].path;
  // await upload.save();

  return res.status(200).json({
    status: 'success',
    data: {
      data: tree,
    },
  });
});
