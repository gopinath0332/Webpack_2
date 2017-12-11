const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');


module.exports = {
   entry: {
      app: "./src/index.js"
   },
   output: {
      filename: "[name].build.js",
      path: path.resolve(__dirname, "dist")
   },
   plugins: [
      new CleanWebpackPlugin(['dist']),
      new HtmlWebpackPlugin({
         title: "webpack"
      }),
      new webpack.optimize.CommonsChunkPlugin({
         name: "common"
      })
   ],
   module: {
      rules: [{
         test: /\.css$/,
         use: [
            'style-loader', 'css-loader'
         ]
      }]
   }
}