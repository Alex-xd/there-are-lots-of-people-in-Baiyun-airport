const path = require('path');
const webpack = require('webpack');
const config = require('./webpack.base.conf');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const SRC_PATH = path.resolve(__dirname, '../src');

let SOURCE_MAP = false;

config.devtool = SOURCE_MAP ? '#source-map' : false;

config.plugins = (config.plugins || []).concat([
    new HtmlWebpackPlugin({
        chunks: ['modules/common', 'main/main'],
        chunksSortMode: 'dependency',
        title: 'Demo',
        filename: 'main.html', // 相对于output.path的路径
        template: SRC_PATH + '/pages/main/index.html',
        inject: 'body',
        minify: {
            removeComments: true
        },
        // favicon: './src/assets/favicon.png',
    }),

    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    }),

    new webpack.LoaderOptionsPlugin({minimize: true})
]);

module.exports = config;