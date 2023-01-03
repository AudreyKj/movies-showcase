const React = require('react');
const ReactDOMServer = require('react-dom/server');
const { StaticRouter } = require("react-router-dom/server");
import App from '../client/App.jsx';


function serverRenderer() {
    return (req, res, next) => {
        res.status(200).send(`
            <!doctype html>
            <html>
            <head>
                <title></title>
            </head>
            <body>
                <div id="root">${ReactDOMServer.renderToString(<StaticRouter location={req.url}><App /></StaticRouter>)}</div>
                <script src="/client.js"></script>
            </body>
            </html>
        `);
    };
}

export default serverRenderer;