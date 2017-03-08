var gulp = require('gulp');

var plugins = require('gulp-load-plugins')({
  'config': require('./package.json'),
  'pattern': ['*'],
  'scope': ['dependencies','devDependencies']
});

gulp.task('default', function (cb) {
  plugins.runSequence('bower', 'less', 'webpack', cb);
});

gulp.task('less', function (cb) {
  plugins.runSequence('less:front', cb);
});

gulp.task('webpack', function (cb) {
  plugins.runSequence('webpack:main', cb);
});

gulp.task('watch', function(cb) {
  plugins.runSequence('less', 'webpack', cb);
  gulp.watch('./less/**/*.less', ['less']);
  gulp.watch('./js/**/*.js', ['webpack']);
});

gulp.task('bower', require('./gulp/bower')(gulp, plugins));

gulp.task('less:front', require('./gulp/less')(gulp, plugins, 'theme', '../dist/css', false));

gulp.task('webpack:main', require('./gulp/webpack')(gulp, plugins, 'main', '../dist/js'));

// var iconfont = require('gulp-iconfont');
// var iconfontCss = require('gulp-iconfont-css');
// var runTimestamp = Math.round(Date.now()/1000);
//
// gulp.task('img', require('./gulp/img')(gulp, plugins));
//
// gulp.task('font:typo', require('./gulp/fontTypo')(gulp, plugins));
//
// gulp.task('favicon', require('./gulp/favicons')(gulp, plugins));
