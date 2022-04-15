var path = require('path');
var webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const postcssPresetEnv = require('postcss-preset-env');

module.exports = {
  entry: {
    site: ['./assets/javascripts/index.js', './assets/stylesheets/index.scss']
  },
  output: {
    filename: 'assets/javascripts/[name].js',
    path: path.resolve(__dirname, '.tmp/dist')
  },

  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [postcssPresetEnv({browsers: 'last 2 versions'})],
              },
            },
          },
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'assets/stylesheets/[name].css'
    })
  ],
  mode: 'production'
}