const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');

const paths = {
	build: 'build/',
	source: 'src/'
};

module.exports = {
    entry: {
        bundle: `./${paths.source}components/index.jsx`
    },
    output: {
        path: path.resolve(__dirname, paths.build),
        filename: 'js/[name].js'
    },
    plugins: [
        new ExtractTextPlugin('css/style.css'),
        new HtmlPlugin({
            template: `./${paths.source}index.html`
        })
    ],
    devServer: {
        contentBase: paths.build
    },
    watch: true,
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.(jpe?g|gif|png|svg)$/,
                exclude: /node_modules/,
                loader: 'file-loader?name=/images/[name].[ext]'
            }
        ]
    }
};