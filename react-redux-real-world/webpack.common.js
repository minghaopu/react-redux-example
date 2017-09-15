const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    './src/index'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    publicPath: '/public/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${__dirname}/src/index.html`,
      filename: 'index.html'
    })
  ],
  module: {
    rules: [{
      test: /.\js[x]?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      include: __dirname
    },
    {
      test: /\.css$/,
      loader: "style-loader!raw-loader"
    }],
  }
};
