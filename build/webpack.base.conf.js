const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const BUILD_PATH = path.resolve(__dirname, '../static');
const ROOT_PATH = path.resolve(__dirname, '../');
const SRC_PATH = path.resolve(__dirname, '../src');

module.exports = {
    entry: './src/main.js',
    output: {
        path: BUILD_PATH,
        publicPath: '/',
        filename: '[name].js',
        chunkFilename: 'chunk.[id].[chunkhash:8].js'   // 关于chunkFilename作用 → http://www.cnblogs.com/ihardcoder/p/5623411.html
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel',
            exclude: /node_modules/
        }, {
            test: /\.(png|jpg|gif)$/,
            loader: 'url?limit=8192',
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
            loader: "url?limit=10000&mimetype=application/font-woff"
        }, {
            test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
            loader: "url?limit=10000&mimetype=application/font-woff"
        }, {
            test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
            loader: "url?limit=10000&mimetype=application/octet-stream"
        }, {
            test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
            loader: "file"
        }, {
            test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
            loader: "url?limit=10000&mimetype=image/svg+xml"
        }]
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            options: {
                context: __dirname,
                postcss: [autoprefixer]
            }
        }),
        new ExtractTextPlugin({
            filename: '[name].[contenthash:8].css'
        }),
        new WebpackMd5Hash(),
        new webpack.ProvidePlugin({
            $: 'jQuery',
            jQuery: 'jQuery',
            "window.jQuery": "jQuery"
        }),
    ],
    resolveLoader: {
        moduleExtensions: ["-loader"]
    },
    resolve: {
        extensions: [
            '.js'
        ],
        alias: {
            'root': ROOT_PATH,
            'src': SRC_PATH,
            'assets': SRC_PATH + '/assets',
            'api': SRC_PATH + '/api',
            'node_modules': ROOT_PATH + '/node_modules',
        }
    }
};
