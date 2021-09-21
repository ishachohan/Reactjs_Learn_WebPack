var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

function buildConfig(configDirs) {
  return {
    entry: configDirs.APP_DIR + '/index.js',
    output: {
      path: configDirs.BUILD_DIR,
      filename: 'bundle.js',
      publicPath: '/'
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    module: {
      rules :[
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
        }
          }
      ]
    },
    devServer: {
      host: 'localhost',
      port: 8080,
      open: true,
    },
    plugins: [
      new HtmlWebpackPlugin({
          template: configDirs.APP_DIR + '/index.html'
      }),
      new webpack.DefinePlugin({
        'process.env': JSON.stringify(require('dotenv').config().parsed)
     })
    ]
  };
};
module.exports = buildConfig;