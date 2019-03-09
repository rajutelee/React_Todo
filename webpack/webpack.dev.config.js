const webpack = require('webpack'),
    path = require('path'),
    parentDir = path.join(__dirname, '../');
module.exports = {
    entry: [
        path.join(parentDir, 'index.js')
    ],
    output: {
        path: parentDir + '/dist',
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }, {
            test: /\.less$/,
            loaders: ["style-loader", "css-loder", "less-loader"]
        }
        ]
    },
    devServer: {
        contentBase: parentDir,
        historyApiFallback: true
    }
}