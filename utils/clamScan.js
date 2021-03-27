const NodeClam = require('clamscan');
const catchAsync = require('./catchAsync');
const fs = require('fs').promises;

module.exports = catchAsync(async (req, res, next) => {
  // //scan file here
  const clamscan = await new NodeClam().init();
  const { is_infected, file, viruses } = await clamscan.is_infected(
    `./tmp/my-uploads/${req.file.filename}`
  );
  if (is_infected) {
    //remove file
    await fs.unlink(`./tmp/my-uploads/${req.file.filename}`);
    return res.status(201).json({
      status: 'Failed',
      message: 'Infected File! Please upload without viruses',
    });
  }

  next();
});
