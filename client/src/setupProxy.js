/**
 * Step 14:
 * setupProxy.js This allows us to concurrently
 * run our back and front end servers and make
 * CORS requests between these to
 */

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://localhost:5000',
            changeOrigin: true,
        })
    );
};