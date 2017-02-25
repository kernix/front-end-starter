module.exports = function (gulp, plugins) {
  return function () {
    return gulp.src(plugins.mainBowerFiles(), {
      'base': 'bower_components'
    }).pipe(gulp.dest('../dist/vendor/'));
  };
};
