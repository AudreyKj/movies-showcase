const express = require('express');
const fs = require("fs");
const path = require("path");
const React = require("react");
const { StaticRouter } = require("react-router-dom/server");
const ReactDOMServer = require('react-dom/server');
import App from "../client/App.jsx";

// const webpackDevMiddleware = require('webpack-dev-middleware');
// const webpackHotMiddleware = require('webpack-hot-middleware');
// const webpackConfig = require('../../webpack.config');
// const compiler = webpack(webpackConfig);

const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotServerMiddleware = require('webpack-hot-server-middleware');
const config = require('../../webpack.config.js');
const app = express();
 
const compiler = webpack(config);
 
const PORT = process.env.PORT || 4000;


const isProd = process.env.NODE_ENV === "production"
const isDev = !isProd

if (isDev) {
 
  app.use(webpackDevMiddleware(compiler, {
    publicPath: config[0].output.publicPath,
    stats: {
        chunks: false,
        hash: false,
        modules: false,
        version: false,
        assets: false,
        entrypoints: false,
        builtAt: false,
    }
}));

//Enable "webpack-hot-middleware"
app.use(webpackHotServerMiddleware(compiler));

}

app.use(express.static(path.resolve(__dirname, "..", "..", "public")));

//serve the routes
app.get("*", (req, res) => {


  res.set('Content-Type', "text/html; charset=utf-8");

  fs.readFile(path.resolve(__dirname, "..", "..", "public", "index.html"), 'utf8', (err, data) => {
    console.log("data", data)

    if (err) {
      console.error(err)
      return res.status(500).send('Error: please try again later!')
    }
    return res.send(
      data.replace(
        '<main id="app"></main>',
        `<main id="app">${ReactDOMServer.renderToString(<StaticRouter location={req.url}><App /></StaticRouter>)}</main>`
      )
    )
  })

})


app.get("/dist/main.css", (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', '..', 'dist/main.css'));
})

app.get('/dist/bundle.js', function (req, res) {
  res.sendFile(path.resolve(__dirname, '..', '..', 'dist/bundle.js'));
});

app.listen(PORT, () => {
  console.log(`running on port ${PORT}`)
})





