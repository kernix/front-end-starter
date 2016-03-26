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
  fs = require('fs');

gulp.task('default', ['less', 'watch', 'bower']);

var FAVICON_DATA_FILE = 'faviconData.json';

gulp.task('generate-favicon', function(done) {
  realFavicon.generateFavicon({
    masterPicture: 'src/img/favicon/favicon.png',
    dest: 'dist/img/favicons/',
    iconsPath: 'dist/img/favicons/',
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

gulp.task('inject-favicon-markups', function() {
  gulp.src([ 'index.php' ])
    .pipe(realFavicon.injectFaviconMarkups(JSON.parse(fs.readFileSync(FAVICON_DATA_FILE)).favicon.html_code))
    .pipe(gulp.dest(''));
});

gulp.task('check-for-favicon-update', function(done) {
  var currentVersion = JSON.parse(fs.readFileSync(FAVICON_DATA_FILE)).version;
  realFavicon.checkForUpdates(currentVersion, function(err) {
    if (err) {
      throw err;
    }
  });
});

gulp.task('bower', function () {
  return gulp.src(mainBowerFiles(), {
      base: 'bower_components'
    })
    .pipe(gulp.dest('dist/vendor/'));
});

gulp.task('less', function() {
  return gulp.src('src/less/theme.less')
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
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('webpack', function (callback) {
  webpack({
    entry: './src/js/main.js',
    output: {
      filename: './dist/js/main.min.js',
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

gulp.task('watch', function() {
  gulp.watch('src/less/**/*.less', ['less']);
  gulp.watch('src/js/**/*.js', ['webpack']);
});
