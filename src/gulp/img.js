var tiny = require('gulp-tinypng-nokey');

module.exports = function (gulp, plugins) {
  return function () {
    return gulp.src('img/data-img/*')
      .pipe(tiny())
      .pipe(gulp.dest('../dist/img/'))
  };
};
