const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const dist = path.join(__dirname, '../dist');

module.exports = [
  {
    name: 'client',
    mode: 'development',
    target: 'web',
    devtool: 'cheap-module-source-map',
    entry: ['./src/client/index.js', 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true'],
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
          test: /\.s[ac]ss$/,
          exclude: /node_modules/,
          use: ['style-loader', 'css-loader', 'sass-loader'],
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
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.DefinePlugin({
        'process.env.API_URL': JSON.stringify(process.env.API_URL || 'http://localhost:8080'),
      }),
    ],
    resolve: {
      extensions: ['.jsx', '.js'],
    },
  }, {
    name: 'server',
    mode: 'development',
    target: 'node',
    devtool: 'cheap-module-source-map',
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
          test: /\.s[ac]ss$/,
          exclude: /node_modules/,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
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
  },
];
