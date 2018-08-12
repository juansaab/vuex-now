const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');

module.exports = {
  mode: 'none',
  entry: path.resolve(__dirname + '/src/vuex-now.js'),
  output: {
    filename: 'vuex-now.js',
    libraryTarget: 'umd',
    // These options are useful if the user wants to load the module with AMD
    library: 'vuex-now',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['babel-preset-env']
          }
        }
      }
    ]
  },
  externals: {
    vuex: 'vuex'
  }
}