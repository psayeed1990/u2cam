const StreamZip = require('node-stream-zip');
const fs = require('fs').promises;
const path = require('path');
const rmfr = require('rmfr');

module.exports = async (req, res, next) => {
  var zip = new StreamZip.async({
    file: `./tmp/my-uploads/${req.file.filename}`,
    storeEntries: true,
  });

  // entry functions
  const entry = await zip.on('entry');

  //create path
  var pathname = await path.resolve(
    `html-theme-uploads/${req.file.filename}`,
    entry.name
  );

  // check maliciously crafted path
  if (
    await /\.\./.test(
      path.relative(`html-theme-uploads/${req.file.filename}`, pathname)
    )
  ) {
    return res.status(201).json({
      status: 'Failed',
      message: `[Zip Warn]: Maliciously crafted paths in zip file:,
      ${entry.name}`,
    });
  }
  //get directories
  // if ('/' === entry.name[entry.name.length - 1]) {
  //   // console.log('[DIR]', entry.name);
  // }

  //create stream
  const stream = await zip.stream(entry.name);

  // example: print contents to screen
  //stream.pipe(process.stdout);

  // example: save contents to file

  await fs.mkdir(path.dirname(pathname), { recursive: true });
  await stream.pipe(await fs.createWriteStream(pathname));

  // on close delete macosx if there is one
  await zip.close();
  await rmfr(`html-theme-uploads/${req.file.filename}/__MACOSX/`);

  //delete uploaded zip after extracting
  await fs.unlink(`./tmp/my-uploads/${req.file.filename}`);

  //pass to next
  next();
};
