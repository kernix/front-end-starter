const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin')
var WebpackNotifierPlugin = require('webpack-notifier');

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
      plugins: [
        new webpack.LoaderOptionsPlugin({
          options: {
            devtols: false,
            productionSourceMap: false
          }
        }),
        new webpack.ProvidePlugin({
          // $: 'jquery',
          // jQuery: 'jquery',
          // 'window.jQuery': 'jquery',
          Rails: '@rails/ujs',
          Popper: ['popper.js', 'default'],
          bootstrap: ['bootstrap']
        }),
        new WebpackNotifierPlugin({alwaysNotify: true})
      ],
      optimization: {
        minimize: true,
        minimizer: [
          new TerserPlugin({
            parallel: true,
            terserOptions: { output: {comments: false} }
          }),
        ]
      },
      performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
      },
      'mode': 'production'
    }, function (err, stats) {
      if (err) throw new plugins.util.PluginError('webpack', err);
      plugins.util.log('[webpack:' + name + ']', stats.toString());
      done();
    });
  };
};
