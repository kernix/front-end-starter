var notify = require("gulp-notify");
var gutil = require('gulp-util');
var autoprefixer = require('autoprefixer');
var gulpif = require('gulp-if');
var config = {
  sourceMaps: !gutil.env.production
};

module.exports = function (gulp, plugins, name, dest, reload) {
  return function () {
    return gulp.src('./sass/' + name + '.scss')
      // .pipe(gulpif(config.sourceMaps, plugins.sourcemaps.init()))
      .pipe(plugins.sass().on('error', plugins.notify.onError(function (error) {
         return  error;
      })))
      .pipe(plugins.sassUnicode())
      .pipe(plugins.repostcss([
        autoprefixer({
          overrideBrowserslist: ['last 3 version']
        })
      ]))
      .pipe(plugins.cleanCss({level: {1: {specialComments: 0}}}))
      .pipe(plugins.rename(name + '.min.css'))
      // .pipe(gulpif(config.sourceMaps, plugins.sourcemaps.write('./map')))
      .pipe(gulp.dest(dest))
  };
};
