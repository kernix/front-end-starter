const notify = require("gulp-notify");
const autoprefixer = require('autoprefixer');
const gulpif = require('gulp-if');
const sass = require('sass');
const resass = require('gulp-sass')(sass);

const config = {
  sourceMaps: process.argv.indexOf('--production') === -1,
  notifyMessage: process.argv.indexOf('--production') === -1,
};

const sassCompileOptions = {
  quietDeps: true,
  verbose: false,
  // silenceDeprecations: [
  //   'legacy-js-api',
  //   'import',
  //   'global-builtin',
  //   'color-functions',
  //   'slash-div',
  // ],
};

module.exports = function (gulp, plugins, name, dest, reload) {
  return function () {
    return gulp.src('./sass/' + name + '.scss', { allowEmpty: true })
      // .pipe(gulpif(config.sourceMaps, plugins.sourcemaps.init()))
      .pipe(resass(sassCompileOptions).on('error', notify.onError({
        message: "Error: <%= error.message %>",
        sound: false
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
      .pipe(gulpif(config.notifyMessage, notify({
        message: "Build CSS <%= file.relative %>",
        sound: false
      })))
      .pipe(gulp.dest(dest));
  };
};
