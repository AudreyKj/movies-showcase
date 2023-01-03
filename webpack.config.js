const webpack = require('webpack');
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


const isDevelopment = process.env.NODE_ENV !== 'production';
//console.log(process.env.NODE_ENV)


const dist = path.join(__dirname, 'dist');

module.exports = [
    {
        name: 'client',
        mode: 'development',
        target: 'web',
        entry: ['./src/client/index.js', 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true',],
        output: {
            path: dist,
            filename: 'client.js'
        },
        devtool: 'source-map',
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
              use: 'file-loader'
          }
        ],
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
  ],
    }, {
        name: 'server',
        mode: 'development',
        target: 'node',
        entry: './src/server/renderToString',
        output: {
            path: dist,
            filename: 'server.js',
            libraryTarget: 'commonjs2'
        },
        devtool: 'source-map',
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
              use: 'file-loader'
          }
         ],
    },
    plugins: [new MiniCssExtractPlugin()],
    }
];