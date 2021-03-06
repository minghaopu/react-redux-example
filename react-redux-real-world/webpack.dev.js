const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports =  merge(common, {
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: './dist/'
  },
  plugins: [
    new webpack.DefinePlugin({
      __ENV__: JSON.stringify(process.env.NODE_ENV)
    })
  ]
});
