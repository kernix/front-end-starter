var gulp = require('gulp');

var plugins = require('gulp-load-plugins')({
  'config': require('./package.json'),
  'pattern': ['*'],
  'scope': ['dependencies','devDependencies'],
  'rename': {
    'gulp-postcss': 'repostcss'
  }
});

gulp.task('less:front', require('./tasks/less')(gulp, plugins, 'main', '../dist/css', false));
gulp.task('webpack:main', require('./tasks/webpack')(gulp, plugins, 'main', '../dist/js'));
gulp.task('copy-vendor', require('./tasks/copy-vendor')(gulp, plugins));

// Optional
gulp.task('iconfont', require('./tasks/iconfont')(gulp, plugins));
//
// gulp.task('img', require('./tasks/img')(gulp, plugins));
//
// gulp.task('font:typo', require('./tasks/fontTypo')(gulp, plugins));
//
// gulp.task('favicon:img', require('./tasks/favicons')(gulp, plugins));
// gulp.task('favicon:code', require('./tasks/faviconsCode')(gulp, plugins));


// Main
gulp.task('less', gulp.parallel('less:front'));

gulp.task('webpack', gulp.parallel('webpack:main'));

// gulp.task('favicon', gulp.series('favicon:img', 'favicon:code'));


// Watch
gulp.task('watch:less', function () {
  gulp.watch('./less/**/*.less', gulp.series('less'));
});
gulp.task('watch:js', function () {
  gulp.watch('./js/*.js', gulp.series('webpack'));
});
gulp.task('watch:iconfont', function () {
  gulp.watch('./fonts/iconfont/*.svg', gulp.series('iconfont'));
});


gulp.task('watch', gulp.parallel('less', 'webpack', 'watch:less', 'watch:js', 'watch:iconfont'));

gulp.task('default', gulp.parallel('copy-vendor', 'less', 'webpack'));
