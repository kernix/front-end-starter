var gulp = require('gulp');

var iconfont = require('gulp-iconfont');
var iconfontCss = require('gulp-iconfont-css');
var runTimestamp = Math.round(Date.now()/1000);

var plugins = require('gulp-load-plugins')({
  'config': require('./package.json'),
  'pattern': ['*'],
  'scope': ['devDependencies']
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

gulp.task('watch', function() {
  gulp.watch('./less/**/*.less', ['less']);
  gulp.watch('./js/**/*.js', ['webpack']);
});

gulp.task('bower', require('./gulp/bower')(gulp, plugins));

gulp.task('less:front', require('./gulp/less')(gulp, plugins, 'theme', '../dist/css', false));

gulp.task('webpack:main', require('./gulp/webpack')(gulp, plugins, 'main', '../dist/js'));

gulp.task('img', require('./gulp/img')(gulp, plugins));

gulp.task('font:typo', require('./gulp/fontTypo')(gulp, plugins));
// gulp.task('font:icon', require('./gulp/fontIcon')(gulp, plugins));

gulp.task('favicon', require('./gulp/favicons')(gulp, plugins));


var fontName = 'Eleven';

gulp.task('Iconfont', function(){
  return gulp.src(['./fonts/icons/*.svg'])
    .pipe(iconfontCss({
       fontName: fontName,
       path: './less/mixins/iconTmp.less',
       targetPath: '/../../../src/less/elements/icons.less',
       fontPath: '../fonts/icons/'
     }))
    .pipe(iconfont({
      fontName: fontName, // required
      prependUnicode: true, // recommended option
      formats: ['ttf', 'eot', 'woff', 'woff2', 'svg'], // default, 'woff2' and 'svg' are available
      timestamp: runTimestamp, // recommended to get consistent builds when watching files
    }))
      .on('glyphs', function(glyphs, options) {
        // CSS templating, e.g.
        console.log(glyphs, options);
      })
    .pipe(gulp.dest('../dist/fonts/icons/'));
});
