var gulp = require('gulp');
var notify = require("gulp-notify");

var plugins = require('gulp-load-plugins')({
  'config': require('./package.json'),
  'pattern': ['*'],
  'scope': ['dependencies','devDependencies']
});

gulp.task('less:front', require('./tasks/less')(gulp, plugins, 'theme', '../dist/css', false));
gulp.task('webpack:main', require('./tasks/webpack')(gulp, plugins, 'main', '../dist/js'));

// Optional
// gulp.task('img', require('./tasks/img')(gulp, plugins));
//
// gulp.task('font:typo', require('./tasks/fontTypo')(gulp, plugins));

// gulp.task('favicon:img', require('./tasks/favicons')(gulp, plugins));
// gulp.task('favicon:code', require('./tasks/faviconsCode')(gulp, plugins));


gulp.task('bower', require('./tasks/bower')(gulp, plugins));
gulp.task('less', gulp.parallel('less:front'));
gulp.task('webpack', gulp.parallel('webpack:main'));
// gulp.task('favicon', gulp.parallel('favicon:img', 'favicon:code'));

gulp.task('watch', function () {
  gulp.watch('./less/**/*.less', gulp.series('less'));
  gulp.watch('./js/**/*.js', gulp.series('webpack'));
});

gulp.task('default', gulp.parallel('bower', 'less', 'webpack'));
