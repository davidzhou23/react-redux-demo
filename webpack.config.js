const path = require('path');
const HtmlwebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist')
    },
    mode: 'development',
    devtool: 'sourcemap',
    module:{
        rules:[{
            test: /\.js$/,
            use: 'babel-loader'
        }]
    },
    plugins:[new HtmlwebpackPlugin({
        template:"./src/index.html",
        filename:'index.html',
        inject: true
    })]
}