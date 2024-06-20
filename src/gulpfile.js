var gulp = require('gulp');

var plugins = require('gulp-load-plugins')({
  'config': require('./package.json'),
  'pattern': ['*'],
  'scope': ['dependencies','devDependencies']
});

// gulp.task('favicon:img', require('./tasks/favicons')(gulp, plugins));
// gulp.task('favicon:code', require('./tasks/faviconsCode')(gulp, plugins));

// Main
gulp.task('iconfont', require('./tasks/iconfont')(gulp, plugins));

// gulp.task('favicon', gulp.series('favicon:img', 'favicon:code'));

// Watch
gulp.task('watch:iconfont', function () {
  gulp.watch('./fonts/iconfont/*.svg', gulp.series('iconfont'));
});


gulp.task('watch', gulp.parallel('watch:iconfont'));

gulp.task('default', gulp.parallel('iconfont'));