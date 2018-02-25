module.exports = function (gulp, plugins) {
  return function () {
    return gulp.src([
      // Material design icon
      './node_modules/material-design-iconic-font/dist/css/material-design-iconic-font.min.css',
      './node_modules/material-design-iconic-font/dist/fonts/*',
    ], {
        base: 'node_modules'
    }).pipe(gulp.dest('../dist/vendor/'));
  };
};
