var realFavicon = require ('gulp-real-favicon');
var fs = require('fs');
var FAVICON_DATA_FILE = 'faviconData.json';

module.exports = function (gulp, plugins) {
  return function () {
    return gulp.src([ '../index.php' ])
      .pipe(realFavicon.injectFaviconMarkups(JSON.parse(fs.readFileSync(FAVICON_DATA_FILE)).favicon.html_code))
      .pipe(gulp.dest('../'));
  };
};
