var FAVICON_DATA_FILE = 'faviconData.json';
var realFavicon = require ('gulp-real-favicon');

module.exports = function (gulp, plugins) {
  return function (done) {
  realFavicon.generateFavicon({
      masterPicture: 'img/favicon/favicon.png',
      dest: '../dist/img/favicons/',
      iconsPath: '../dist/img/favicons/',
      design: {
        ios: {
          pictureAspect: 'noChange',
          assets: {
            ios6AndPriorIcons: false,
            ios7AndLaterIcons: false,
            precomposedIcons: false,
            declareOnlyDefaultIcon: true
          }
        },
        desktopBrowser: {},
        windows: {
          pictureAspect: 'noChange',
          backgroundColor: '#2b5797',
          onConflict: 'override',
          assets: {
            windows80Ie10Tile: false,
            windows10Ie11EdgeTiles: {
              small: false,
              medium: true,
              big: false,
              rectangle: false
            }
          }
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
            legacyIcon: false,
            lowResolutionIcons: false
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
