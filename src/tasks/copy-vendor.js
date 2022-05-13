module.exports = function (gulp, plugins) {
  return function () {
    return gulp.src([
      // Jquery
      // './node_modules/jquery/dist/jquery.min.js',

    ], {
        base: 'node_modules'
    }).pipe(gulp.dest('../dist/vendor/'));
  };
};
