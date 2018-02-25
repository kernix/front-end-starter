var webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = function (gulp, plugins, name, dest) {
  return function (done) {
    let entry = {};
    entry[name] = './js/' + name + '.js';
    plugins.webpack({
      'entry': entry,
      'output': {
        'filename': '../' + dest + '/[name].min.js'
      },
      'mode': process.env.NODE_ENV || 'production',
      'plugins': [
        new UglifyJsPlugin()
      ],
      'externals': {
        'hammer': 'Hammer'
      }
    }, function (err, stats) {
      if (err) throw new plugins.util.PluginError('webpack', err);
      plugins.util.log('[webpack:' + name + ']', stats.toString());
      done();
    });
  };
};
