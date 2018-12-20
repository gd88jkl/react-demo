const path = require('path')
const merge = require('webpack-merge')
const webpackConfigBase = require('./webpack.base.config')
const OpenBrowserPlugin = require('open-browser-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const PORT = 3000

function resolve(relatedPath) {
    return path.join(__dirname, relatedPath)
}
  
const webpackConfigDev = {
    mode: 'development',
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: resolve('../public/index.html'),
        }),
        new OpenBrowserPlugin({
            url: `http://localhost:${PORT}`,
        }),
    ],
    devtool: 'source-map',
    devServer: {
        contentBase: resolve('../src'),
        historyApiFallback: true,
        hot: false,
        host: '0.0.0.0',
        port: PORT,
        disableHostCheck: true
    },
}

module.exports = merge(webpackConfigBase, webpackConfigDev)