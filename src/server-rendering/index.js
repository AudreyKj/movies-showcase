/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
const express = require('express');
const path = require('path');

const app = express();

const port = process.env.PORT || 3000;

if (process.env.NODE_ENV !== 'production') {
  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const webpackHotServerMiddleware = require('webpack-hot-server-middleware');
  const config = require('../../webpack-config/webpack.dev.js');
  const compiler = webpack(config);
  app.use(webpackDevMiddleware(compiler, {
    serverSideRender: true,
  }));
  app.use(webpackHotMiddleware(compiler.compilers.find((elem) => elem.name === 'client')));
  app.use(webpackHotServerMiddleware(compiler));
} else {
  const CLIENT_ASSETS_DIR = path.join(__dirname, '../../build/client');
  const CLIENT_STATS_PATH = path.join(CLIENT_ASSETS_DIR, 'stats.json');
  const SERVER_RENDERER_PATH = path.join(__dirname, '../../build/server.js');
  const serverRenderer = require(SERVER_RENDERER_PATH);
  const stats = require(CLIENT_STATS_PATH);
  app.use(express.static(CLIENT_ASSETS_DIR));
  app.use(serverRenderer(stats));
}

app.listen(port);
