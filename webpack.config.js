const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const config = {
    entry: './public/js/src/testWebpackEntry.js',
    output: {
        publicPath: '/dist',
        path: path.join(__dirname, 'public', 'js/output/'),
        filename: 'testWebpackOutput.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    }
};

module.exports = config;