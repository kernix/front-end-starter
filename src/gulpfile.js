var gulp = require('gulp'),
  gutil = require('gulp-util');
  uglify = require('gulp-uglify'),
  less = require('gulp-less'),
  sourcemaps = require('gulp-sourcemaps'),
  plumber = require('gulp-plumber'),
  postcss = require('gulp-postcss'),
  cleancss = require('gulp-clean-css'),
  rename = require("gulp-rename"),
  autoprefixer = require('autoprefixer'),
  mainBowerFiles = require('main-bower-files'),
  webpack = require("webpack"),
  realFavicon = require ('gulp-real-favicon'),
  fs = require('fs'),
  tiny = require('gulp-tinypng-nokey');

gulp.task('default', ['less', 'watch', 'bower', 'img']);

gulp.task('watch', function() {
  gulp.watch('less/**/*.less', ['less']);
  gulp.watch('js/**/*.js', ['webpack']);
});

gulp.task('bower', function () {
  return gulp.src(mainBowerFiles(), {
      base: 'bower_components'
    })
    .pipe(gulp.dest('../dist/vendor/'));
});

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
    .pipe(rename({suffix: '.min'}))
    .pipe(sourcemaps.write('./map'))
    .pipe(gulp.dest('../dist/css'));
});

gulp.task('webpack', function (callback) {
  webpack({
    entry: './js/main.js',
    output: {
      filename: '../dist/js/main.min.js',
    },
    plugins: [
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin(),
      //new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
    ],
    resolve: {
      extensions: ['', '.js']
    },
    externals: {
      'jquery': 'jQuery',
      'hammer': 'Hammer'
    }
  }, function (err, stats) {
    if (err) throw new gutil.PluginError('webpack', err);
    gutil.log('[webpack]', stats.toString());
    callback();
  });
});

var FAVICON_DATA_FILE = 'faviconData.json';

gulp.task('favicon', function(done) {
  realFavicon.generateFavicon({
    masterPicture: 'img/favicon/favicon.png',
    dest: '../dist/img/favicons/',
    iconsPath: '../dist/img/favicons/',
    design: {
      ios: {
        pictureAspect: 'noChange'
      },
      desktopBrowser: {},
      windows: {
        pictureAspect: 'noChange',
        backgroundColor: '#da532c',
        onConflict: 'override'
      },
      androidChrome: {
        pictureAspect: 'noChange',
        themeColor: '#ffffff',
        manifest: {
          name: 'Framework UI',
          display: 'browser',
          orientation: 'notSet',
          onConflict: 'override',
          declared: true
        }
      },
      safariPinnedTab: {
        pictureAspect: 'blackAndWhite',
        threshold: 49.21875,
        themeColor: '#5bbad5'
      }
    },
    settings: {
      scalingAlgorithm: 'Mitchell',
      errorOnImageTooSmall: false
    },
    markupFile: FAVICON_DATA_FILE
  }, function() {
    done();
  });
});

// gulp.task('check-for-favicon-update', function(done) {
//   var currentVersion = JSON.parse(fs.readFileSync(FAVICON_DATA_FILE)).version;
//   realFavicon.checkForUpdates(currentVersion, function(err) {
//     if (err) {
//       throw err;
//     }
//   });
// });

gulp.task('img', function(cb) {
  gulp.src('img/data-img/*')
    .pipe(tiny())
    .pipe(gulp.dest('../dist/img/'));
});
