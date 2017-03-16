const path = require('path');
const webpack = require('webpack');
const config = require('./webpack.base.conf');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const SRC_PATH = path.resolve(__dirname, '../src');

config.devtool = '#source-map';

config.output.publicPath = '/';

config.plugins = (config.plugins || []).concat([
    new HtmlWebpackPlugin({
        chunks: ['main/main', 'common/common'],
        // chunksSortMode: 'dependency',
        title: 'Demo',
        filename: 'index.html',
        template: SRC_PATH + '/pages/main/index.html',
        inject: 'body',
        // favicon: 'src/assets/favicon.png',
    }),
]);

config.devServer = {
    historyApiFallback: true,
    // noInfo: true,
    port: 8000
};

module.exports = config;

