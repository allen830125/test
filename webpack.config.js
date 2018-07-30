const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const config = {
    entry: {
        // "/common/BacUIComps": "./public/src/common/bacUIComps/main.js",
        // "/sales/PMS0610010": "./public/src/sales/PMS0610010/main.js",
        // "/sales/PMS0620020": "./public/src/sales/PMS0620010/main.js",
        // "/sales/PMS0620050": "./public/src/sales/PMS0620050/main.js",
        // "/setup/PMS0810230_setup": "./public/src/setup/PMS0810230/main.js",
        "/output/testOutput": "./public/js/src/testInput.js",
        // "/reservation/PMS0110040": "./public/src/reservation/PMS0110040/main.js"
        // "/reservation/PMS0110050": "./public/src/reservation/PMS0110050/main.js",
        // "/system/permissionSetup": ["./public/src/admin/permission/permissionSetup", "./public/src/admin/permission/store"],
        // "/system/prgPropsSetup": "./public/src/admin/prgPropsSetup/main.js"
    },
    output: {
        path: path.join(__dirname, 'public', 'js'),
        filename: '[name].js'
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
    },
    resolve: {
        /**
         * Vue v2.x 之後 NPM Package 預設只會匯出 runtime-only 版本
         */
        alias: {
            vue: 'vue/dist/vue.js'
        },
        extensions: ['.js', '.vue']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()

    ],
    devServer: {
        historyApiFallback: true,
        noInfo: true
    },
    devtool: '#eval-source-map'
};

if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map';
    // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]);
}

module.exports = config;