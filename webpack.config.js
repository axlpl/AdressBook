var webpack = require('webpack');
var path = require('path');

module.exports = {
  cache: true,
  devtool: 'source-map',
  entry: path.resolve(__dirname, 'src', 'app', 'entry.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        test: /\.js$/,
        query: {
          presets: ['es2015'],
          compact: true
        }
      }
    ]
  }
};