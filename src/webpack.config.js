const Encore = require("@symfony/webpack-encore");
var webpack = require('webpack');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

// Manually configure the runtime environment if not already configured yet by the "encore" command.
// It's useful when you use tools that rely on webpack.config.js file.
if (!Encore.isRuntimeEnvironmentConfigured()) {
    Encore.configureRuntimeEnvironment(process.env.NODE_ENV || "dev");
}

Encore
    // directory where compiled assets will be stored
    .setOutputPath("../dist/")
    // public path used by the web server to access the output path
    .setPublicPath("/")
    // only needed for CDN's or sub-directory deploy
    //.setManifestKeyPrefix('build/')

    /*
     * ENTRY CONFIG
     *
     * Add 1 entry for each "page" of your app
     * (including one that's included on every page - e.g. "app")
     *
     * Each entry will result in one JavaScript file (e.g. app.js)
     * and one CSS file (e.g. app.css) if your JavaScript imports CSS.
     */
    .addEntry("js/main.min", "./js/main.js")


    // will output as web/build/main.min.css
    .addStyleEntry("main.min", "./sass/main.scss")

    // allow sass files to be processed
    .enableSassLoader()
    // .addLoader({
    //     test: /\.scss$/,
    //     use: [
    //         'style-loader',
    //         {
    //             loader: 'css-loader',
    //             options: {
    //                 url: false, // Ignorer les URLs dans le Sass
    //             }
    //         },
    //         'sass-loader' // Transpile Sass en CSS
    //     ]
    // })
 
    // post css
    .enablePostCssLoader()

    .addPlugin(new webpack.ProvidePlugin({
        Rails: '@rails/ujs',
        Popper: ['popper.js', 'default'],
        bootstrap: ['bootstrap'],
    }))



    // allow legacy applications to use $/jQuery as a global variable
    // .autoProvidejQuery()

    // When enabled, Webpack "splits" your files into smaller pieces for greater optimization.
    .splitEntryChunks()

    // will require an extra script tag for runtime.js
    // but, you probably want this, unless you're building a single-page app
    .enableSingleRuntimeChunk()

    /*
     * FEATURE CONFIG
     *
     * Enable & configure other features below. For a full
     * list of features, see:
     * https://symfony.com/doc/current/frontend.html#adding-more-features
     */
    .cleanupOutputBeforeBuild()
    .enableSourceMaps(!Encore.isProduction())
    // enables hashed filenames (e.g. app.abc123.css)
    // .enableVersioning(Encore.isProduction())

    // Optimisation CSS
    .configureCssMinimizerPlugin((options) => {
        options.minimizerOptions = {
            preset: ['default', { discardComments: { removeAll: true } }],
        };
    })

    .addPlugin(new BundleAnalyzerPlugin({
        analyzerPort: '8082'
    }))

    .enableBuildNotifications(true, (options) => {
        options.alwaysNotify = true;
    })

    // enables @babel/preset-env polyfills
    .configureBabelPresetEnv((config) => {
        config.useBuiltIns = 'usage';
        config.corejs = 3;
    })

    // Jquery
    // './node_modules/jquery/dist/jquery.min.js',

    // Cookie
    // './node_modules/tarteaucitronjs/tarteaucitron.js',
    // './node_modules/tarteaucitronjs/tarteaucitron.services.js',
    // './node_modules/tarteaucitronjs/lang/tarteaucitron.fr.js',
    // './node_modules/tarteaucitronjs/lang/tarteaucitron.en.js',
    // './node_modules/tarteaucitronjs/lang/tarteaucitron.es.js',
    // './node_modules/tarteaucitronjs/css/tarteaucitron.css',

module.exports = Encore.getWebpackConfig();
