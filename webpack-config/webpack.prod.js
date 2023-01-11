const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const path = require('path');

const dist = path.join(__dirname, '../dist');

module.exports = [
  {
    name: 'client',
    mode: 'production',
    target: 'web',
    devtool: 'source-map',
    entry: './src/client/index.js',
    output: {
      path: dist,
      filename: 'client.js',
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: [/node_modules/, '/src/client/testing'],
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
            },
          },
        },
        {
          test: /\.(css|s[ac]ss)$/,
          exclude: /node_modules/,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader', 'postcss-loader'],
        },
        {
          test: /\.(png|jpe?g|svg)$/i,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[path][name].[ext]',
                publicPath: '/',
              },
            },
          ],
        },
      ],
    },
    plugins: [new MiniCssExtractPlugin(),
      new webpack.DefinePlugin({
        'process.env.API_URL': JSON.stringify(process.env.API_URL || 'http://localhost:8080'),
      })],
    resolve: {
      extensions: ['.jsx', '.js'],
    },
    optimization: {
      minimizer: [
        new CssMinimizerPlugin(),
      ],
    },
  }, {
    name: 'server',
    mode: 'production',
    target: 'node',
    devtool: 'source-map',
    entry: './src/server-rendering/renderer',
    output: {
      path: dist,
      filename: 'server.js',
      libraryTarget: 'commonjs2',
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
            },
          },
        },
        {
          test: /\.(css|s[ac]ss)$/,
          exclude: /node_modules/,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader', 'postcss-loader'],
        },
        {
          test: /\.(png|jpe?g|svg)$/i,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[path][name].[ext]',
                publicPath: '/',
              },
            },
          ],
        },
      ],
    },
    plugins: [new MiniCssExtractPlugin()],
    resolve: {
      extensions: ['.jsx', '.js'],
    },
    optimization: {
      minimizer: [
        new CssMinimizerPlugin(),
      ],
    },
  },
];
