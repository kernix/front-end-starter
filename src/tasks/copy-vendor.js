module.exports = function (gulp, plugins) {
  return function () {
    return gulp.src([
// Jquery
// './node_modules/jquery/dist/jquery.min.js',

// Cookie
'./node_modules/tarteaucitronjs/tarteaucitron.js',
'./node_modules/tarteaucitronjs/tarteaucitron.services.js',
'./node_modules/tarteaucitronjs/lang/tarteaucitron.fr.js',
'./node_modules/tarteaucitronjs/lang/tarteaucitron.en.js',
'./node_modules/tarteaucitronjs/lang/tarteaucitron.es.js',
'./node_modules/tarteaucitronjs/css/tarteaucitron.css',

    ], {
        base: 'node_modules'
    }).pipe(gulp.dest('../dist/vendor/'));
  };
};
