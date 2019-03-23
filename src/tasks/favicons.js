var FAVICON_DATA_FILE = 'faviconData.json';
var realFavicon = require ('gulp-real-favicon');

module.exports = function (gulp, plugins) {
  return function (done) {
  realFavicon.generateFavicon({
      masterPicture: 'img/favicon/favicon.png',
      dest: '../dist/img/favicons/',
      iconsPath: 'dist/img/favicons/',
      design: {
        ios: {
          pictureAspect: 'noChange',
          assets: {
            ios6AndPriorIcons: true,
            ios7AndLaterIcons: true,
            precomposedIcons: false,
            declareOnlyDefaultIcon: false
          },
          appName: 'Kernix',
        },
        desktopBrowser: {},
        windows: {
          pictureAspect: 'noChange',
          backgroundColor: '#ffffff',
          onConflict: 'override',
          assets: {
            windows80Ie10Tile: true,
            windows10Ie11EdgeTiles: {
              small: true,
              medium: true,
              big: true,
              rectangle: true
            }
          },
          appName: 'Kernix',
        },
        androidChrome: {
          pictureAspect: 'noChange',
          themeColor: '#ffffff',
          manifest: {
            display: 'standalone',
            orientation: 'notSet',
            onConflict: 'override',
            declared: true
          },
          assets: {
            legacyIcon: true,
            lowResolutionIcons: true
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
  };
};
