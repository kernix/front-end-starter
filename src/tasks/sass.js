const notify = require("gulp-notify");
const autoprefixer = require('autoprefixer');
const gulpif = require('gulp-if');
const resass = require('gulp-sass')(require('sass'));
const cache = require('gulp-cache');

const config = {
  sourceMaps: process.argv.indexOf('--production') === -1,
  notifyMessage: process.argv.indexOf('--production') === -1,
};

module.exports = function (gulp, plugins, name, dest, reload) {
  return function () {
    return gulp.src('./sass/' + name + '.scss', { allowEmpty: true })
      // .pipe(gulpif(config.sourceMaps, plugins.sourcemaps.init()))
      .pipe(cache(resass({
        // outputStyle: 'expanded', // by default it's expanded
        // wrapDeclarationsAfterNested: false, // by default it's false
        quietDeps: true,
        silenceDeprecations: ['legacy-js-api'],
        logger: {
          warn: function(message) {
            if (!message.includes('deprecation') && !message.includes('repetitive deprecation warnings') && !message.includes('More info')) {
              console.warn(message);
            }
          }
        }
      }).on('error', notify.onError(function (error) {
        return error;
      }))))
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
      .pipe(gulpif(config.notifyMessage, notify({ message: "Build CSS " + name+'.css' })));
  };
};