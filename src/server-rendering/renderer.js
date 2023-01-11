const React = require('react');
const ReactDOMServer = require('react-dom/server');
const { StaticRouter } = require('react-router-dom/server');
const App = require('../client/App.jsx').default;

function serverRenderer() {
  return (req, res, next) => {
    res.status(200).send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta name="description" content="Movies Showcase app with the best movies">
            <meta name="og:title" property="og:title" content="Movies Showacse app">
            <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🎬</text></svg>"/>
            <link rel="stylesheet" href="main.css">
            <title>Movies Showcase</title>

        </head>
        <body>
            <main id="root">${ReactDOMServer.renderToString(<StaticRouter location={req.url}><App /></StaticRouter>)}</main>
            <noscript>
            You need to enable JavaScript to run this app.
            </noscript>
            <script src="/client.js"></script>
        </body>
        </html>`);
  };
}

export default serverRenderer;
