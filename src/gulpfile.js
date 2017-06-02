var gulp = require('gulp');
var notify = require("gulp-notify");

var plugins = require('gulp-load-plugins')({
  'config': require('./package.json'),
  'pattern': ['*'],
  'scope': ['dependencies','devDependencies']
});

// gulp.task('watch', function(cb) {
//   plugins.runSequence('less', 'webpack', cb);
//   gulp.watch('./less/**/*.less', ['less']);
//   gulp.watch('./js/**/*.js', ['webpack']);
// });


gulp.task('less:front', require('./gulp/less')(gulp, plugins, 'theme', '../dist/css', false));
gulp.task('webpack:main', require('./gulp/webpack')(gulp, plugins, 'main', '../dist/js'));

// Optional
// gulp.task('img', require('./gulp/img')(gulp, plugins));
//
// gulp.task('font:typo', require('./gulp/fontTypo')(gulp, plugins));

// gulp.task('favicon:img', require('./gulp/favicons')(gulp, plugins));
// gulp.task('favicon:code', require('./gulp/faviconsCode')(gulp, plugins));


gulp.task('bower', require('./gulp/bower')(gulp, plugins));
gulp.task('less', gulp.parallel('less:front'));
gulp.task('webpack', gulp.parallel('webpack:main'));
// gulp.task('favicon', gulp.parallel('favicon:img', 'favicon:code'));


gulp.task('default', gulp.parallel('bower', 'less', 'webpack'));
