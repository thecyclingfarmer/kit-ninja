var times =  require('./times'),
    cat   =  require('./cat'),
    lorem =  require('./lorem');

var helpers = {
  times: times,
  lipsumtitle: lorem.lipsumtitle,
  lipsum: lorem.lipsum,
  cat: cat
}

module.exports = helpers;
