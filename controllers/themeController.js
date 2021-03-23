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
  // if (tree.children.length === 1 && tree.children[0].type === 'directory') {
  //   fs.rename(`./${tree.children[0].path}`, upload.link, () => {
  //     console.log(tree.children[0].path);
  //   });

  //   // return res.status(200).json({
  //   //   status: 'success',
  //   //   data: {
  //   //     data: tree.children[0],
  //   //   },
  //   // });
  // }
  return res.status(200).json({
    status: 'success',
    data: {
      data: { tree, upload },
    },
  });
});
