const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');
const apiMocker = require('webpack-api-mocker');

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

module.exports = {
  module: {
    rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel-loader",
    },
    {
        test: /\.(woff|woff2|ttf|svg|eot)/,
        loader: 'url-loader?limit=100000',
    },
    {
      test: /\.(scss$|css$)/,
      use: [
      {
            loader: "style-loader" // creates style nodes from JS strings
          },
          {
            loader: "css-loader" // translates CSS into CommonJS
          },
          {
            loader: "sass-loader" // compiles Sass to CSS
          }
          ]
        }
        ]
      },
      devServer: {
       before(app){
        apiMocker(app, path.resolve('./api-mocker.content.js'), {
           changeHost: true,
         })
       }
     },
     plugins: [htmlPlugin]
   };