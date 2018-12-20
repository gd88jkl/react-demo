const path = require('path')

function resolve(relatedPath) {
    return path.join(__dirname, relatedPath)
}

const webpackConfigBase = {
    entry: {
        index: resolve('../src/index.js'),
    },
    output: {
        path: resolve('../dist'),
        publicPath: '/',//这样引入的js文件就是绝对路径
        filename: 'static/js/[name].[hash:4].js',
        chunkFilename: 'static/js/chunks/[name].[hash:4].js',
    },
    resolve: {
        extensions: ['.js', '.json'],
        alias: {
            '@src': path.join(__dirname, '../src'),
            '@images': path.join(__dirname, '../public/images')
        }
    },
    module: {
        rules: [
            {
                test: /\.js[x]?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader'
                // use: {
                    //options配置等同.babelrc的配置。babel-plugin-import按需加载
                    // options: {
                    //     presets: ['@babel/preset-env', '@babel/preset-react'],
                    //     plugins: [
                    //         [
                    //             "import",
                    //             {
                    //                 "libraryName": "antd",
                    //                 "style": true
                    //             }
                    //         ]
                    //     ]
                    // }
                // }
            }, {
                test: /\.(css|less)$/,
                include: [
                    resolve('../public/styles'),
                    resolve('../src/components'),
                    resolve('../node_modules/antd')
                ],
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: "less-loader",
                    options: {
                        modifyVars: {
                            "primary-color": "#1890ff"
                        },
                        javascriptEnabled: true
                    }
                }]
            }, {
                test: /\.(jpg|png|jpe?g|gif|svg)(\?.*)?$/,
                exclude: /(node_modules|bower_components)/,
                include: [resolve('../public/images')],
                loader: 'url-loader',
                options: {
                    limit: 8192,
                    name: 'static/images/[name].[hash:4].[ext]'
                }
            }, {
                test: /\.(woff|eot|ttf|svg|gif)$/,
                loader: 'url-loader',
                options: {
                    limit: 8192,
                    name: 'static/fonts/[name].[hash:4].[ext]'
                }
            }
        ]
    }
}

module.exports = webpackConfigBase
