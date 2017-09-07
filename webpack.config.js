/**
 * Created by star on 17/9/7.
 */
var webpack = require('webpack');
var path = require('path');
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    devtool: '',
    entry: {
        'main': path.resolve(__dirname, './src/main.js'),
        'comm': ['vue', 'iview']
    },
    output: {
        path: path.resolve(__dirname, ''),
        publicPath: '/', //热启动地址改成'dist/',webpack打包的时候地址改成'./'
        filename: '[name].min.js'
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg|gif|svg|ttf|woff|eot)$/,
                use: ['url-loader?limit=8192&name=images/[name].[ext]']
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                use: ['babel-loader'],
                exclude: /node_modules/
            }, {
                test: /\.(less|css)$/,
                use: ExtractTextPlugin.extract({
                    use: ['css-loader', 'less-loader'],
                    fallback: 'style-loader'
                })
            }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        },
        extensions: ['.', '.css', '.js', '.vue']
    },
    plugins: [
        // new webpack.DefinePlugin({
        //     'process.env': {
        //         'NODE_ENV': JSON.stringify('production')
        //     }
        // }),
        new webpack.HotModuleReplacementPlugin(), //热启动插件必加
        // new BundleAnalyzerPlugin({
        //     analyzerMode: 'server',
        //     analyzerHost: '127.0.0.1',
        //     analyzerPort: '3030',
        //     reportFilename: 'stars.html',
        //     defaultSizes: 'gzip',
        //     openAnalyzer: true
        // }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html'// html模板路径,模板路径是支持传参调用loader的,
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'comm',
            filename: '[name].min.js',
            minChunks: Infinity
        }),
        new ExtractTextPlugin('styles.css')
    ]
}