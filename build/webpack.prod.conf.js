const path = require('path');
const webpack = require('webpack');
const config = require('./webpack.base.conf');
const HtmlWebpackPlugin = require('html-webpack-plugin');

config.output.path = path.resolve(__dirname, './static/');

let SOURCE_MAP = true;

config.devtool = SOURCE_MAP ? '#source-map' : false;

config.plugins = (config.plugins || []).concat([
    new HtmlWebpackPlugin({
        title: 'Demo',
        filename: '../index.html', // 相对于output.path的路径
        template: './src/index.html',
        // favicon: './src/assets/favicon.png',
        inject: true,
        minify: {
            removeComments: true
        }
    }),

    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    }),

    new webpack.LoaderOptionsPlugin({ minimize: true })
]);

module.exports = config;