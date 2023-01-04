const webpack = require('webpack');
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const dist = path.join(__dirname, 'dist');

module.exports = [
  {
    name: 'client',
    mode: 'development',
    target: 'web',
    devtool: 'source-map',
    entry: ['./src/client/index.js', 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true',],
    output: {
      path: dist,
      filename: 'client.js'
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.s[ac]ss$/,
          exclude: /node_modules/,
          use: ['style-loader', 'css-loader', 'sass-loader']
        },
        {
          test: /\.(png|jpe?g|svg)$/i,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[path][name].[ext]',
                publicPath: "/",
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
    ],
  }, {
    name: 'server',
    mode: 'development',
    target: 'node',
    devtool: 'source-map',
    entry: './src/serverRendering/renderer',
    output: {
      path: dist,
      filename: 'server.js',
      libraryTarget: 'commonjs2'
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        },
        {
          test: /\.s[ac]ss$/,
          exclude: /node_modules/,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
        },
        {
          test: /\.(png|jpe?g|svg)$/i,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[path][name].[ext]',
                publicPath: "/",
              },
            },
          ],
        }
      ],
    },
    plugins: [new MiniCssExtractPlugin()],
  }
];