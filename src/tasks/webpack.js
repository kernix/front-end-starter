var webpack = require('webpack');

module.exports = function (gulp, plugins, name, dest) {
  return function (done) {
    let entry = {};
    entry[name] = './js/' + name + '.js';
    plugins.webpack({
      'entry': entry,
      'output': {
        'filename': dest + '/[name].min.js'
      },
      'plugins': [
        new webpack.optimize.UglifyJsPlugin({
          output: {
            comments: false
          }
        }),
      ],
      externals: {
        'hammer': 'Hammer'
      }
    }, function (err, stats) {
      if (err) throw new plugins.util.PluginError('webpack', err);
      plugins.util.log('[webpack:' + name + ']', stats.toString());
      done();
    });
  };
};
