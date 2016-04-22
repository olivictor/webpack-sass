'use strict';

var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  // the base path which will be used to resolve entry points
  context: __dirname,
  // the main entry point for our application's frontend JS
  entry: {
    app: './app/app',
  },

  output: {
    filename: '[name].bundle.js',
  },

  module: {
    loaders: [
      { test: /\.scss$/, loader: ExtractTextPlugin.extract('style-loader', 'css!sass') }
    ],
  },

  plugins: [
    new ExtractTextPlugin('app.css', { allChunks: true })
  ]
}
