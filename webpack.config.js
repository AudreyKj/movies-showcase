const path = require("path");
const webpack = require("webpack");

module.exports = {
    entry: "./src/index.js",
    mode: "development",
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules|bower_components)/,
          loader: "babel-loader",
          options: { presets: ["@babel/env"] }
        },
        {
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: ['@svgr/webpack'],
          },
        {
            test: /\.scss$/,
              use: [{
                loader: "style-loader"
              }, {
                loader: "css-loader" 
              }, {
                loader: "sass-loader"
              }]
            },
      ]
    },
    resolve: { extensions: ["*", ".js", ".jsx"] },
    output: {
      path: path.resolve(__dirname, "dist/"),
      publicPath: "/dist/",
      filename: "bundle.js"
    },
    devServer: {
        static: {
            directory: path.resolve('./public'),
        },
        compress: true,
        hot: true,
        port: 3000,
    },
    plugins: [new webpack.HotModuleReplacementPlugin()]
  };