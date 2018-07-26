var path = require('path');
var webpack = require('webpack');

function resolve(dir) {
    return path.join(__dirname, '..', dir);
}
module.exports = {
    entry: {
        vmodal: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/dist/',
        filename: '[name].min.js',
        library: 'VModal',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    externals: {
        vue: {
            root: 'Vue',
            commonjs: 'vue',
            commonjs2: 'vue',
            amd: 'vue'
        }
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            '@': resolve('src')
        }
    },
    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: 'style!css!autoprefixer'
            },
            {
                test: /\.less$/,
                loader: 'style!css!less'
            },
            {
                test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                loader: 'url?limit=8192'
            },
            {
                test: /\.(html|tpl)$/,
                loader: 'vue-html'
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"development"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            uglifyOptions: {
                ie8: false,
                output: {
                    comments: false,
                    beautify: false
                },
                mangle: {
                    keep_fnames: true
                },
                compress: {
                    warnings: false,
                    drop_console: true
                }
            }
        })
    ]
};
