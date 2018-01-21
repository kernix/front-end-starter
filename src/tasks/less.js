var notify = require("gulp-notify");
var gutil = require('gulp-util');
var gulpif = require('gulp-if');
var config = {
  sourceMaps: !gutil.env.production
};

module.exports = function (gulp, plugins, name, dest, reload) {
  return function () {
    return gulp.src('./less/' + name + '.less')
      .pipe(plugins.plumber({
        errorHandler: function(err) {
          console.log(err);
          this.emit('end');
        }
      }))
      .pipe(plugins.plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
      .pipe(gulpif(config.sourceMaps, plugins.sourcemaps.init()))
      .pipe(plugins.less())
      .pipe(plugins.postcss([
        new plugins.autoprefixer({
          browsers: ['last 3 version']
        })
      ]))
      .pipe(plugins.cleanCss())
      .pipe(plugins.rename(name + '.min.css'))
      .pipe(gulpif(config.sourceMaps, plugins.sourcemaps.write('./map')))
      .pipe(gulp.dest(dest))
      // .pipe(notify({message: 'Less compiled'}));
  };
};
