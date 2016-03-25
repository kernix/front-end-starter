var gulp = require('gulp'),
  gutil = require('gulp-util');
  less = require('gulp-less'),
  sourcemaps = require('gulp-sourcemaps'),
  plumber = require('gulp-plumber'),
  postcss = require('gulp-postcss'),
  cleancss = require('gulp-clean-css');
  autoprefixer = require('autoprefixer'),
  perfectionist = require('perfectionist');

gulp.task('default', ['less', 'watch']);


gulp.task('less', function() {
  return gulp.src('less/theme.less')
    .pipe(sourcemaps.init())
    .pipe(plumber({
      errorHandler: function(err) {
        console.log(err);
        this.emit('end');
      }
    }))
    .pipe(less())
    .pipe(postcss([
      autoprefixer({
        browsers: ['last 3 version']
      })
    ]))
    .pipe(cleancss())
    .pipe(sourcemaps.write('./map'))
    .pipe(gulp.dest('css'));
});


gulp.task('watch', function() {
  gulp.watch('less/**/*.less', ['less']);
});
