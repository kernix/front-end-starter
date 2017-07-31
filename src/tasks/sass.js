module.exports = function (gulp, plugins, name, dest, reload) {
  return function () {
    return gulp.src('./sass/' + name + '.scss')
      .pipe(plugins.sourcemaps.init())
      .pipe(plugins.sass().on('error', plugins.notify.onError(function (error) {
         return  error;
      })))
      .pipe(plugins.postcss([
        new plugins.autoprefixer({
          browsers: ['last 3 version']
        })
      ]))
      .pipe(plugins.cleanCss())
      .pipe(plugins.rename(name + '.min.css'))
      .pipe(plugins.sourcemaps.write('./map'))
      .pipe(gulp.dest(dest))
  };
};
