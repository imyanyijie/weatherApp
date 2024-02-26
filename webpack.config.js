const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  devtool: 'inline-source-map',
  devServer:{
    static: './dist',
  },
  module: {
    rules:[
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      // {
      //   //IMAGE LOADER
      //   test: /\.(jpe?g|png|gif|svg)$/i,
      //   loader:'file-loader',
      //   options: {
      //     name: '[name].[ext]',
      //     outputPath: 'images/'
      //   },
      // },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'WeatherApp',
      template: 'src/index.html',
      filename: 'index.html',
    }),
  ],
  optimization: {
    runtimeChunk: 'single',
  },
};