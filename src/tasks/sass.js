const notify = require("gulp-notify");
const gutil = require('gulp-util');
const autoprefixer = require('autoprefixer');
const gulpif = require('gulp-if');
const resass = require('gulp-sass')(require('sass'));
const config = {
  sourceMaps: !gutil.env.production,
  notifyMessage: !gutil.env.production
};

module.exports = function (gulp, plugins, name, dest, reload) {
  return function () {
    return gulp.src('./sass/' + name + '.scss')
      // .pipe(gulpif(config.sourceMaps, plugins.sourcemaps.init()))
      .pipe(resass().on('error', plugins.notify.onError(function (error) {
        return error;
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
      .pipe(gulpif(config.notifyMessage, notify("Build CSS " + name+'.css')));
  };
};
