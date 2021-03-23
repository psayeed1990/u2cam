const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');
const multer = require('multer');
const fs = require('fs');
const Upload = require('../models/uploadModel');
const factory = require('./handlers/factory');
const NodeClam = require('clamscan');
// const ClamScan = new NodeClam().init();
const path = require('path');
const StreamZip = require('node-stream-zip');
const rimraf = require('rimraf');
const FileType = require('file-type');

exports.setTimeOutLimit = (req, res, next) => {
  req.socket.setTimeout(10 * 60 * 1000);
  next();
};

const multerStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'tmp/my-uploads');
  },
  filename: function (req, file, cb) {
    // const ext = file.mimetype.split('/')[1];
    cb(null, file.fieldname + '-' + Date.now());
  },
});

// const multerFilter = (req, file, cb) => {
//   const buffer = readChunk.sync(file, 0, 4100);
//   if (fileType(buffer).ext == 'zip') {
//     cb(null, true);
//   } else {
//     cb(new AppError('Not an zip! Please upload only zip.', 400), false);
//   }
// };

//upload zipped theme with multer
const upload = multer({
  storage: multerStorage,
  // fileFilter: multerFilter,
});

exports.uploadZipFile = upload.single('zippedTheme');
exports.handleZippedTheme = catchAsync(async (req, res, next) => {
  let extractCount = 0;

  //check file type
  const zipFileCheck = await FileType.fromFile(
    `./tmp/my-uploads/${req.file.filename}`
  );

  if (!zipFileCheck || zipFileCheck.mime !== 'application/zip') {
    console.log('wrong');
    //delete tmp uploaded zip file
    fs.unlink(`./tmp/my-uploads/${req.file.filename}`, () =>
      console.log('deleted')
    );
    return res.status(201).json({
      status: 'Failed',
      message: 'Not a zip file! Upload only zip',
    });
  }

  // //scan file here
  // ClamScan.then(async (clamscan) => {
  //   try {
  //     // You can re-use the `clamscan` object as many times as you want
  //     const version = await clamscan.get_version();
  //     console.log(`ClamAV Version: ${version}`);

  //     const { is_infected, file, viruses } = await clamscan.is_infected(
  //       `./tmp/my-uploads/${req.file.filename}`
  //     );
  //     if (is_infected) console.log(`${file} is infected with ${viruses}!`);
  //   } catch (err) {
  //     // Handle any errors raised by the code in the try block
  //     console.log(err);
  //   }
  // }).catch((err) => {
  //   // Handle errors that may have occurred during initialization
  //   console.log(err);
  // });

  var zip = new StreamZip({
    file: `./tmp/my-uploads/${req.file.filename}`,
    storeEntries: true,
  });

  zip.on('error', async (err) => {
    console.error('[ERROR]', err);
  });

  zip.on('ready', async () => {
    console.log('All entries read: ' + zip.entriesCount);
  });

  zip.on('entry', async (entry) => {
    var pathname = path.resolve(
      `html-theme-uploads/${req.file.filename}`,
      entry.name
    );
    if (
      /\.\./.test(
        path.relative(`html-theme-uploads/${req.file.filename}`, pathname)
      )
    ) {
      console.warn(
        '[zip warn]: ignoring maliciously crafted paths in zip file:',
        entry.name
      );
      return;
    }

    if ('/' === entry.name[entry.name.length - 1]) {
      // console.log('[DIR]', entry.name);
      //add directories amount to extract count
      extractCount += 1;
      return;
    }

    // await console.log('[FILE]', entry.name);
    await zip.stream(entry.name, async (err, stream) => {
      if (err) {
        console.error('Error:', err.toString());
        return;
      }

      stream.on('error', (err) => {
        console.log('[ERROR]', err);
        return;
      });

      // example: print contents to screen
      //stream.pipe(process.stdout);

      // example: save contents to file

      await fs.mkdir(
        path.dirname(pathname),
        { recursive: true },
        async (err) => {
          await stream.pipe(fs.createWriteStream(pathname)).on('close', () => {
            extractCount += 1;

            //delete macosx folder
            if (extractCount === zip.entriesCount) {
              rimraf(
                `html-theme-uploads/${req.file.filename}/__MACOSX/`,
                () => {
                  console.log('deleted macosx folder');

                  //check theme if rules met
                }
              );
            }
          });
        }
      );
    });
  });

  //delete tmp uploaded zip file
  fs.unlink(`./tmp/my-uploads/${req.file.filename}`, () =>
    console.log('uploaded zip deleted')
  );

  const themeName = req.file.originalname.split('.');
  themeName.pop();

  const newUpload = await Upload.create({
    name: themeName.join('.'),
    filename: req.file.filename,
    link: `html-theme-uploads/${req.file.filename}`,
    type: 'html',
    visibility: 'private',
    user: req.user,
  });

  return res.status(201).json({
    status: 'success',
    data: {
      data: newUpload,
    },
  });
});

// OBSOLETE fix __MACOSX files and folders
exports.fix__MACOSX_folders = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const upload = await Upload.findById(id);
  // RIMRAF remove _macos folder
  // const dataPath = path.normalize(
  //   __dirname + `/html-theme-uploads/${req.file.filename}/__MACOSX/`
  // );

  if (`${upload.link}/__MACOSX/`) {
    await rimraf(`${upload.link}/__MACOSX/`, () => console.log('deleted'));
  }

  // //fs module remove _macos folder
  // const dir = `html-theme-uploads/${req.file.filename}/__MACOSX`;
  // console.log(dir);
  // fs.rmdir(dir, { recursive: true }, (err) => {
  //   if (err) {
  //     throw err;
  //   }

  //   console.log(`${dir} is deleted!`);
  // });

  next();
});

//get all by users

//get uploaded files
exports.getAllUploads = factory.getAll(Upload, true);
exports.getUpload = factory.getOne(Upload, true);

exports.updateUpload = factory.updateOne(Upload, true);
exports.deleteUpload = factory.deleteOne(Upload, true);
