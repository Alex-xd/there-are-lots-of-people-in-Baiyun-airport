const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const BUILD_PATH = path.resolve(__dirname, '../static');
const ROOT_PATH = path.resolve(__dirname, '../');
const SRC_PATH = path.resolve(__dirname, '../src');


let isDev = (process.env.NODE_ENV === 'development');


module.exports = {
    entry: './src/main.js',
    output: {
        path: BUILD_PATH,
        publicPath: '/',
        filename: `[name]${isDev ? "" : ".[chunkhash:8]"}.js`,
        chunkFilename: 'chunk.[id].[chunkhash:8].js' // 关于chunkFilename作用 → http://www.cnblogs.com/ihardcoder/p/5623411.html
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
        new ExtractTextPlugin({
            filename: '[name].[contenthash:8].css'
        }),
        new WebpackMd5Hash(),
        new webpack.ProvidePlugin({
            $: 'jQuery',
            jQuery: 'jQuery',
            "window.jQuery": "jQuery",
            ec: 'echarts'
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
