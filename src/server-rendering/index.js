const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackHotServerMiddleware = require('webpack-hot-server-middleware');
const config = require('../../webpack.config');

const app = express();

const port = process.env.PORT || 3000;

const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
  serverSideRender: true,
}));

app.use(webpackHotMiddleware(compiler.compilers.find((elem) => elem.name === 'client')));
app.use(webpackHotServerMiddleware(compiler));

app.listen(port);
