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
  const serverRenderer = require('../../dist/server.js').default;
  app.use(express.static(path.join(__dirname, '../../dist')));
  app.use(serverRenderer());
}

app.listen(port);
