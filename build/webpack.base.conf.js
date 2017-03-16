const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const autoprefixer = require('autoprefixer');
const BUILD_PATH = path.resolve(__dirname, '../dist');
const ROOT_PATH = path.resolve(__dirname, '../');
const SRC_PATH = path.resolve(__dirname, '../src');
const MODULE_PATH = path.resolve(__dirname, '../src/modules');
const PAGES_PATH = path.resolve(__dirname, '../src/pages');

let isDev = (process.env.NODE_ENV === 'development');

module.exports = {
    entry: {
        'common/common': MODULE_PATH + '/common',
        'main/main': PAGES_PATH + '/main',
        'index/index': PAGES_PATH + '/index'
    },
    output: {
        path: BUILD_PATH,
        publicPath: './',
        filename: `[name]${isDev ? ".js" : ".[chunkhash:8].js"}`,
        chunkFilename: 'chunk.[chunkhash:8].js' // 关于chunkFilename作用 → http://www.cnblogs.com/ihardcoder/p/5623411.html
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel',
            exclude: /node_modules/
        }, {
            test: /\.(png|jpg|gif)$/,
            loader: 'url-loader?limit=25000',
            options: {
                name: '[name].[hash:6].[ext]'
            }
        }, {
            test: /\.s[a|c]ss$/,
            exclude: /node_modules/,
            loader: ExtractTextPlugin.extract({
                fallback: 'style',
                use: ['css', 'postcss?sourceMap', 'sass']
            })
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract({
                fallback: "style",
                use: ["css", "postcss"]
            })
        }, { // 支持font awesome的一组loader
            test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
            loader: "url?limit=8192&mimetype=application/font-woff?name=../static/fonts/[name].[ext]"
        }, {
            test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
            loader: "url?limit=8192&mimetype=application/font-woff?name=../static/fonts/[name].[ext]"
        }, {
            test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
            loader: "url?limit=8192&mimetype=application/octet-stream?name=../static/fonts/[name].[ext]"
        }, {
            test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
            loader: "file?name=../static/fonts/[name].[ext]"
        }, {
            test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
            loader: "url?limit=8192&mimetype=image/svg+xml?name=../static/fonts/[name].[ext]"
        }]
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            options: {
                context: __dirname,
                postcss: [autoprefixer]
            }
        }),
        // new webpack.ProvidePlugin({
        //     $: "jquery",
        //     jQuery: "jquery"
        // }),
        new ExtractTextPlugin({
            filename: '[name].[contenthash:8].css'
        }),
        new WebpackMd5Hash()
    ],
    resolveLoader: {
        moduleExtensions: ["-loader"]
    },
    externals: {
        jquery: 'window.$'
    },
    resolve: {
        extensions: [
            '.js',
            '.scss'
        ],
        alias: {
            'root': ROOT_PATH,
            'src': SRC_PATH,
            'lib': SRC_PATH + '/lib',
            'image': SRC_PATH + '/image',
            'components': SRC_PATH + '/components',
            'api': SRC_PATH + '/api',
            'pages': SRC_PATH + '/pages',
            'node_modules': ROOT_PATH + '/node_modules',
        }
    }
};
