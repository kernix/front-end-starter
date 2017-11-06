module.exports = function (gulp, plugins) {
  return function () {
    return gulp.src([
      // Bootstrap
      './node_modules/bootstrap/dist/js/bootstrap.min.js',
      './node_modules/bootstrap/dist/fonts/*',
      './node_modules/popper.js/dist/umd/popper.min.js',
      // AOS
      // './node_modules/aos/dist/aos.css',
      // './node_modules/aos/dist/aos.js',
      // Bootstrap datetimepicker
      // './node_modules/eonasdan-bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min.js',
      // Font-awesome
      // './node_modules/font-awesome/css/font-awesome.min.css',
      // './node_modules/font-awesome/fonts/*',
      // Hammer
      './node_modules/hammerjs/hammer.min.js',
      './node_modules/hammerjs/hammer.min.js.map',
      // Jquery
      './node_modules/jquery/dist/jquery.min.js',
      // Material design icon
      './node_modules/material-design-iconic-font/dist/css/material-design-iconic-font.min.css',
      './node_modules/material-design-iconic-font/dist/fonts/*',
      // Moment
      // './node_modules/moment/locale/fr.js',
      // './node_modules/moment/min/moment.min.js',
      // Rellax
      // './node_modules/rellax/rellax.min.js'
    ], {
        base: 'node_modules'
    }).pipe(gulp.dest('../dist/vendor/'));
  };
};
