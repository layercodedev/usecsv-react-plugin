const webpack = require('webpack');

const rootPath = process.cwd();
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  mode: 'development',
  entry: {
    index: `${rootPath}/src/dev/index.tsx`,
  },
  output: {
    filename: './build/assets/main.[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    publicPath: '/',
  },
  devtool: 'source-map',
  module: {
    rules: [
      // compile js
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader?transpileOnly',

          },
        ],
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: `${rootPath}/src/dev/index.html`,
    }),
  ],
  devServer: {
    open: true,
    hot: true,
    inline: true,
    contentBase: './src',
    port: process.env.PORT || 3040,
    historyApiFallback: {
      disableDotRule: true,
    },
    disableHostCheck: true,
  },
};
