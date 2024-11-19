var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));

const plugins = require('gulp-load-plugins')({
  'config': require('./package.json'),
  'pattern': ['*'],
  'scope': ['dependencies', 'devDependencies'],
  'rename': {
    'gulp-postcss': 'repostcss',
    'gulp-sass': 'resass'
  }
});

gulp.task('sass:front', require('./tasks/sass')(gulp, plugins, 'main', '../dist/css', false));
gulp.task('sass:admin', require('./tasks/sass')(gulp, plugins, 'admin', '../dist/css', false));
gulp.task('webpack:main', require('./tasks/webpack')(gulp, plugins, 'main', '../dist/js'));
gulp.task('copy-vendor', require('./tasks/copy-vendor')(gulp, plugins));


// Optional
gulp.task('iconfont', require('./tasks/iconfont')(gulp, plugins));

// Before brew install fontforge (typo)
// gulp.task('font:typo', require('./tasks/fontTypo')(gulp, plugins));

// gulp.task('favicon:img', require('./tasks/favicons')(gulp, plugins));
// gulp.task('favicon:code', require('./tasks/faviconsCode')(gulp, plugins));


// Main
gulp.task('sass', gulp.parallel('sass:front'));

gulp.task('webpack', gulp.parallel('webpack:main'));

// gulp.task('favicon', gulp.series('favicon:img', 'favicon:code'));

// Watch
gulp.task('watch:sass', function () {
  gulp.watch('./sass/**/*.scss', gulp.series('sass'));
});
gulp.task('watch:js', function () {
  gulp.watch('./js/**/*.js', gulp.series('webpack'));
});
gulp.task('watch:iconfont', function () {
  gulp.watch('./fonts/iconfont/*.svg', gulp.series('iconfont'));
});


gulp.task('watch', gulp.parallel('sass', 'webpack', 'watch:sass', 'watch:js'/*, 'watch:iconfont'*/));

gulp.task('default', gulp.parallel(/*'copy-vendor',*/ 'sass', /*'sass:admin',*/ 'webpack'));
