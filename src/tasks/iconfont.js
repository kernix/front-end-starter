var fontName = 'name_project';
module.exports = function (gulp, plugins) {
  return function () {
    return gulp.src(['./fonts/iconfont/*.svg'], { base: './' })
    .pipe(plugins.iconfontCss({
      fontName: fontName,
      path: './sass/mixins/_fonts-icon.scss',
      targetPath: './../../../src/sass/components/_iconfont.scss',
      fixedCodepoints : true,
      fontPath: '../fonts/icons/',
    }))
    .pipe(plugins.iconfont({
     fontName: fontName,
     formats: ['svg', 'ttf', 'eot', 'woff', 'woff2'],
     normalize: true,
     descent : 0,
     centerHorizontally : true,
     fontWeight : 1001,
    }))
    .on('glyphs', function(glyphs) {
      //  console.log(glyphs);
    })
    .pipe(gulp.dest('../dist/fonts/icons/'));
  };
};
