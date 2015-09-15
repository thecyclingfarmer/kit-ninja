module.exports = function (handlebars) {
  var times =  require('./times'),
      cat   =  require('./cat')(handlebars),
      lorem =  require('./lorem'),
      helpers = {
          times: times,
          lipsumtitle: lorem.lipsumtitle,
          lipsum: lorem.lipsum,
          cat: cat
      };

  return helpers;
}
