var gulp = require('gulp');

var plugins = require('gulp-load-plugins')({
  'config': require('./package.json'),
  'pattern': ['*'],
  'scope': ['dependencies','devDependencies']
});

gulp.task('less:front', require('./tasks/less')(gulp, plugins, 'theme', '../dist/css', false));
gulp.task('webpack:main', require('./tasks/webpack')(gulp, plugins, 'main', '../dist/js'));
gulp.task('copy-vendor', require('./tasks/copy-vendor')(gulp, plugins));

// Optional
// gulp.task('iconfont', require('./tasks/iconfont')(gulp, plugins));
//
// gulp.task('img', require('./tasks/img')(gulp, plugins));
//
// gulp.task('font:typo', require('./tasks/fontTypo')(gulp, plugins));
//
// gulp.task('favicon:img', require('./tasks/favicons')(gulp, plugins));
// gulp.task('favicon:code', require('./tasks/faviconsCode')(gulp, plugins));


gulp.task('less', gulp.parallel('less:front'));

gulp.task('webpack', gulp.parallel('webpack:main'));
// gulp.task('favicon', gulp.parallel('favicon:img', 'favicon:code'));

gulp.task('watch:less', function () {
  gulp.watch('./less/**/*.less', gulp.series('less'));
});
gulp.task('watch:js', function () {
  gulp.watch('./js/main.js', gulp.series('webpack'));
});
gulp.task('watch:iconfont', function () {
  gulp.watch('./fonts/iconfont/*.svg', gulp.series('iconfont'));
});


gulp.task('watch', gulp.parallel('less', 'webpack', 'watch:less', 'watch:js'/*, 'watch:iconfont'*/));

gulp.task('default', gulp.parallel('copy-vendor', 'less', 'webpack'));
