const webpack = require('webpack');
const config = require('./webpack.base.conf');
const HtmlWebpackPlugin = require('html-webpack-plugin');

config.devtool = '#source-map';

config.plugins = (config.plugins || []).concat([
    new HtmlWebpackPlugin({
        title: 'Demo',
        filename: 'index.html',
        template: 'src/index.html',
        inject: 'body',
        // favicon: 'src/assets/favicon.png',
    }),
]);

config.devServer = {
    historyApiFallback: true,
    // noInfo: true,
    port: 8000
};

module.exports = config
