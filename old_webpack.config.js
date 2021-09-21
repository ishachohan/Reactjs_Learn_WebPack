const webpack = require('webpack');
const path = require("path");
const HtmlWebPackPlugin = require('html-webpack-plugin');



module.exports = {
    entry : './src/index.js',
    
    module : {
        rules:[
            {
                test: /\.(js|jsx)$/,
                exclude : /nodes_modules/,
                use : {
                    loader : "babel-loader"
                }
            }
        ],
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    plugins :[
        new HtmlWebPackPlugin({
            template:'./src/index.html'
        }),
        new webpack.DefinePlugin({
            'process.env': JSON.stringify(require('dotenv').config().parsed)
         })
    ],
    output : {
        path :path.resolve(__dirname,'/dist'),
        filename: 'index_bundle.js'
    },
    devServer: {
        host: 'localhost',
        port: 8080,
        open: true,
      },

}