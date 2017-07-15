var gulp = require('gulp');

var plugins = require('gulp-load-plugins')({
  'config': require('./package.json'),
  'pattern': ['*'],
  'scope': ['dependencies','devDependencies']
});

gulp.task('default', function (cb) {
  plugins.runSequence('bower', 'sass', 'webpack', cb);
});

gulp.task('sass', function (cb) {
  plugins.runSequence('sass:front', cb);
});

gulp.task('webpack', function (cb) {
  plugins.runSequence('webpack:main', cb);
});

gulp.task('favicon', function (cb) {
  plugins.runSequence('favicon:img','favicon:code', cb);
});

gulp.task('watch', function(cb) {
  plugins.runSequence('sass', 'webpack', cb);
  gulp.watch('./sass/**/*.scss', ['sass']);
  gulp.watch('./js/**/*.js', ['webpack']);
});

gulp.task('bower', require('./gulp/bower')(gulp, plugins));

gulp.task('sass:front', require('./gulp/sass')(gulp, plugins, 'theme', '../dist/css', false));

gulp.task('webpack:main', require('./gulp/webpack')(gulp, plugins, 'main', '../dist/js'));

// Optional
// gulp.task('favicon:img', require('./gulp/favicons')(gulp, plugins));
// gulp.task('favicon:code', require('./gulp/faviconsCode')(gulp, plugins));
//
// gulp.task('img', require('./gulp/img')(gulp, plugins));
//
// gulp.task('font:typo', require('./gulp/fontTypo')(gulp, plugins));
