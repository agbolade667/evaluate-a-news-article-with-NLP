const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
    entry: './src/client/index.js',
    mode: 'production',
    output: {
    filename: 'bundle.min.js',
        path: path.resolve(__dirname, './dist'),
        libraryTarget:  'var',
        library: 'Client'
},
    module: {
        rules: [
            {
                test: '/\.js$/',
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
		        test: /\.scss$/,
		        use: [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin({
            // Simulate the removal of files
            dry: true,
            // Write Logs to Console
            verbose: true,
            // Automatically remove all unused webpack assets on rebuild
            cleanStaleWebpackAssets: true,
            protectWebpackAssets: false
        }),
        new WorkboxPlugin.GenerateSW({
            clientsClaim: true,
            skipWaiting: true
        }),
        new HtmlWebPackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html",
        }),
        new MiniCssExtractPlugin(),
    ]
}