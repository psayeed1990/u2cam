const unzip2 = (source, destination) => {
  return new Promise(function (resolve, reject) {
    console.info(
      'Started un-zipping from source: %s to destination: %s',
      source,
      destination
    );
    try {
      var sourceStream = fs.createReadStream(source);
      sourceStream.on('error', function (err) {
        console.error('something went wrong', err.code);
        reject(new Error(err));
      });
      var destinationStream = unzipper.Extract({ path: destination });
      destinationStream.on('error', function (err) {
        console.error('something went wrong', err.code);
        reject(new Error(err));
      });
      destinationStream.on('close', function () {
        console.log('Completed extract!');
        resolve();
      });
      sourceStream.pipe(destinationStream).on('error', function (err) {
        console.error('something went wrong', err.code);
        reject(new Error(err));
      });
    } catch (error) {
      console.error('something went wrong', err.code);
      reject(new Error(err));
    }
  });
};

module.exports = unzip2;
