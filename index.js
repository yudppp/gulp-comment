var through = require('through2');
var gulpComment = function(comment) {
  return through.obj(transform);
};

var transform = function(chunk, enc, cb) {
  this.push(chunk);
  return cb();
};

module.exports = gulpComment;
