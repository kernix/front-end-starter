var webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = function (gulp, plugins, name, dest) {
  return function (done) {
    let entry = {};
    entry[name] = './js/' + name + '.js';
    plugins.webpack({
      'entry': entry,
      'output': {
        'path': plugins.path.resolve(__dirname, '../'),
        'filename': dest + '/[name].min.js'
      },
      'mode': 'development',
      'plugins': [
        new UglifyJsPlugin()
      ],
      'externals': {
        'jquery': 'jQuery',
        'hammer': 'Hammer'
      }
    }, function (err, stats) {
      if (err) throw new plugins.util.PluginError('webpack', err);
      plugins.util.log('[webpack:' + name + ']', stats.toString());
      done();
    });
  };
};
