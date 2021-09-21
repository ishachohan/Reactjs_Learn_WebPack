var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

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
          use : 'babel-loader'
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
          template: configDirs.APP_DIR + '/index.html'
      }),
      new webpack.DefinePlugin({
        'process.env': JSON.stringify(require('dotenv').config().parsed)
     })
    ],
    optimization: {
      minimizer: [new UglifyJsPlugin()]
    },
    performance: {
      maxAssetSize: 1000000,
      hints:false
    },
    
    devServer: {
      host: 'localhost',
      port: 8080,
      open: true,
    },
  };
};

module.exports = buildConfig;