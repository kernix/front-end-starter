var gulp = require('gulp'),
  gutil = require('gulp-util');
  uglify = require('gulp-uglify'),
  less = require('gulp-less'),
  sourcemaps = require('gulp-sourcemaps'),
  plumber = require('gulp-plumber'),
  postcss = require('gulp-postcss'),
  cleancss = require('gulp-cleancss'),
  autoprefixer = require('autoprefixer'),
  perfectionist = require('perfectionist'),
  concat = require('gulp-concat'),
  mainBowerFiles = require('main-bower-files'),
  webpack = require("webpack");

// Scripts
// gulp.task('scripts', function() {
//   gulp.src(['js/moment.js','js/bootstrap-datetimepicker.js', 'js/bootstrap-slide.rmin.js','js/hammer.min.js','js/jquery.placeholder.min.js','js/sweetalert.min.js','js/custom-file-input.js'])
//     .pipe(concat('all.js'))
//     .pipe(uglify())
//     .pipe(gulp.dest('js'))
// });

// Bower
gulp.task('bower', function () {
  return gulp.src(mainBowerFiles(), {
      base: 'bower_components'
    })
    .pipe(gulp.dest('public/vendor/'));
});

// Style
gulp.task('styles', function() {
  return gulp.src('src/theme/less/theme.less')
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

// Webpack
// gulp.task('webpack', function (callback) {
//   webpack({
//     entry: './js/main.js',
//     output: {
//       filename: './public/js/bundle.js',
//     },
//     plugins: [
//       new webpack.optimize.DedupePlugin(),
//       new webpack.optimize.UglifyJsPlugin(),
//       new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
//     ],
//     resolve: {
//       extensions: ['', '.js']
//     },
//     externals: {
//       'jquery': 'jQuery'
//     }
//   }, function (err, stats) {
//     if (err) throw new gutil.PluginError('webpack', err);
//     gutil.log('[webpack]', stats.toString());
//     callback();
//   });
// });

// Watch
gulp.task('watch', function() {
  gulp.watch(['src/theme/less/*/*.less' ,'src/theme/less/*.less'], ['styles']);
});

// Default
gulp.task('default', ['styles', 'watch', 'bower' ]);
