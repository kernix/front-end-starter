module.exports = function (gulp, plugins) {
  return function () {
    return gulp.src([
      // Jquery
      './node_modules/jquery/dist/jquery.min.js',
      // Material design icon
      './node_modules/material-design-iconic-font/dist/css/material-design-iconic-font.min.css',
      './node_modules/material-design-iconic-font/dist/fonts/*',
    ], {
        base: 'node_modules'
    }).pipe(gulp.dest('../dist/vendor/'));
  };
};
