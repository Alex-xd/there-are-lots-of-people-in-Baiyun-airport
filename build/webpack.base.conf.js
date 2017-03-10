const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const BUILD_PATH = path.resolve(__dirname, './static');
const ROOT_PATH = path.resolve(__dirname, './');
const SRC_PATH = path.resolve(__dirname, './src');

module.exports = {
    entry: './src/app.js',
    output: {
        path: BUILD_PATH,
        publicPath: '/',
        chunkFilename: 'chunk.[id].[hash:8].js',
        filename: '[name].[chunkhash:8].js'
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
                use: "css?souceMap!sass!postcss",
                fallback: "style"
            })
        }, {
            test: /\.css$/,
            // loader:'style!css?souceMap!postcss'
            loader: ExtractTextPlugin.extract({
                use: "css?souceMap!postcss",
                fallback: "style"
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
        })
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
