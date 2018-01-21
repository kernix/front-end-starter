var gutil = require('gulp-util');
var gulpif = require('gulp-if');
var config = {
  sourceMaps: !gutil.env.production
};

module.exports = function (gulp, plugins, name, dest, reload) {
  return function () {
    return gulp.src('./sass/' + name + '.scss')
      .pipe(gulpif(config.sourceMaps, plugins.sourcemaps.init()))
      .pipe(plugins.sass().on('error', plugins.sass.logError))
      .pipe(plugins.postcss([
        new plugins.autoprefixer({
          browsers: ['last 3 version']
        })
      ]))
      .pipe(plugins.cleanCss())
      .pipe(plugins.rename(name + '.min.css'))
      .pipe(gulpif(config.sourceMaps, plugins.sourcemaps.write('./map')))
      .pipe(gulp.dest(dest))
  };
};
