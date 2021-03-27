const StreamZip = require('node-stream-zip');
const fs = require('fs').promises;
const rmfr = require('rmfr');
const catchAsync = require('./catchAsync');

module.exports = catchAsync(async (req, res, next) => {
  var zip = new StreamZip.async({
    file: `./tmp/my-uploads/${req.file.filename}`,
    storeEntries: true,
  });

  await fs.mkdir(`html-theme-uploads/${req.file.filename}`);
  const count = await zip.extract(
    null,
    `./html-theme-uploads/${req.file.filename}`
  );
  console.log(`Extracted ${count} entries`);
  await zip.close();

  await rmfr(`html-theme-uploads/${req.file.filename}/__MACOSX/`);

  //delete uploaded zip after extracting
  await fs.unlink(`./tmp/my-uploads/${req.file.filename}`);

  //pass to next
  next();
});
