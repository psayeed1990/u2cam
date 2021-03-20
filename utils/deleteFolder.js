var child = require('child_process');

var rmdir = function (directories, callback) {
  console.log('hi');
  if (typeof directories === 'string') {
    directories = [directories];
  }
  var args = directories;
  args.unshift('-rf');
  child.execFile(
    'rm',
    args,
    { env: process.env },
    function (err, stdout, stderr) {
      callback.apply(this, arguments);
    }
  );
};

module.exports = rmdir;
