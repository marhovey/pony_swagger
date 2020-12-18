const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssPlugin = require('mini-css-extract-plugin');

const ExtractCss = new MiniCssPlugin({
  filename: "[name].[hash:8].css"
})

module.exports = {
  entry: "./app/view/index.jsx",
  output: {
    filename: "bundle.[hash:8].js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        enforce: "pre",
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["env", "react", "stage-0"]
            }
          }
        ]
      },
      {
        test: /\.(sc|sa|c)ss$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.(bmp|png|jpg|jpeg|gif)/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: '[name].[hash:8].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'app/view/index.html')
    }),
    ExtractCss,
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    host: '0.0.0.0',
    port: '8080',
    hot: true,
    compress: true,
    contentBase: path.resolve(__dirname, "dist"),
    inline: true,
    proxy: {
      '/api': 'http://127.0.0.1:7001'
    }
  }
}