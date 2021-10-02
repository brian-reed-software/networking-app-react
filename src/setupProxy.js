const { createProxyMiddleware } = require('http-proxy-middleware');
     
    module.exports = function(app) {
        app.use(createProxyMiddleware('/**', { target: 'https://friends-again-api.herokuapp.com/' }));
        // app.use(createProxyMiddleware('/otherApi/**', { target: 'http://localhost:5000' }));
    };