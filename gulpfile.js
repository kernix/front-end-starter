var gulp = require('gulp'),
  uglify = require('gulp-uglify'),
  less = require('gulp-less'),
  cssnano = require('gulp-cssnano'),
  sourcemaps = require('gulp-sourcemaps'),
  plumber = require('gulp-plumber'),
  imagemin = require('gulp-imagemin'),
  postcss = require('gulp-postcss'),
  autoprefixer = require('autoprefixer'),
  mqpacker = require('css-mqpacker'),
  perfectionist = require('perfectionist'),
  csswring = require('csswring'),
  concat = require('gulp-concat');

// function errorLog(error) {
//   console.error.bind(error);
//   this.emit('end');
// }

// Images
// gulp.task('image', function() {
// 	return gulp.src('/img/*')
// 		.pipe(imagemin())
// 		.pipe(gulp.dest('img'));
// });

// Scripts
// gulp.task('scripts', function() {
// 	return gulp.src('js/main.js')
// 		.pipe(plumber())
// 		.pipe(uglify())
// 		.pipe(gulp.dest('js'));
// });
gulp.task('scripts', function() {
  gulp.src(['js/jquery.min.js','js/moment.js','js/bootstrap-datetimepicker.js', 'js/bootstrap-slide.rmin.js', 'js/bootstrap.min.js',  'js/hammer.min.js','js/jquery.placeholder.min.js','js/sweetalert.min.js'])
    .pipe(concat('all.js'))
    .pipe(uglify())
    .pipe(gulp.dest('js'))
});

// Styles
// Less
gulp.task('styles', function() {
  var processors = [
    autoprefixer({
      browsers: ['last 3 version']
    }),
    //mqpacker,
    //csswring,
    perfectionist({
      format: "compact"
    })
  ];
  return gulp.src('src/theme/less/theme.less')
    .pipe(sourcemaps.init())
    .pipe(plumber({
      errorHandler: function(err) {
        console.log(err);
        this.emit('end');
      }
    }))
    .pipe(less())
    .pipe(postcss(processors))
    //.pipe(cssnano())    .pipe(sourcemaps.write('./map'))
    //.on('error', errorLog)
    .pipe(gulp.dest('css'));
});

// Watch All
gulp.task('watch', function() {
  //gulp.watch('js/main.js', ['scripts']);
  gulp.watch('src/theme/less/*/*.less', ['styles']);
  gulp.watch('src/theme/less/*.less', ['styles']);
  //gulp.watch('build/img/*', ['image']);
});

// Default
gulp.task('default', ['styles', 'watch', 'scripts']);
