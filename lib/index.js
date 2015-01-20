var Hapi = require('hapi');

//create server
var server = new Hapi.Server();
server.connection({
    host: 'localhost',
    port: 8080
});

//redirect / to the html dir
var home = {
    handler: function (request, reply) {
        reply.redirect('/html');
    }
};

// directory mapping
var html = { handler: { directory: { listing: true, index: false, path: __dirname + '/../html' } } };
var images = { handler: { directory: { listing: true, index: false, path: __dirname + '/../images' } } };
var css = { handler: { directory: { listing: false, index: false, path: __dirname + '/../node_modules/reveal.js/css' } } };
var lib = { handler: { directory: { listing: false, index: false, path: __dirname + '/../node_modules/reveal.js/lib' } } };
var js = { handler: { directory: { listing: false, index: false, path: __dirname + '/../node_modules/reveal.js/js' } } };
var plugin = { handler: { directory: { listing: false, index: false, path: __dirname + '/../node_modules/reveal.js/plugin' } } };

// routes
server.route({ method : 'GET', path : '/', config : home });
server.route({ method : 'GET', path : '/html/{path*}', config : html });
server.route({ method : 'GET', path : '/css/{path*}', config : css });
server.route({ method : 'GET', path : '/images/{path*}', config : images });
server.route({ method : 'GET', path : '/lib/{path*}', config : lib });
server.route({ method : 'GET', path : '/plugin/{path*}', config : plugin });
server.route({ method : 'GET', path : '/js/{path*}', config : js });

// ##### Plugins #####

// Options to pass into the 'Good' plugin
var goodOptions = {
    opsInterval: 10000,
    reporters: [
        {
            reporter: require('good-console'),
            args: [
                {error: '*', log: '*', ops: '*', request: '*', response: '*'}
            ]
        }
    ]
};

// Require the Hapi plugin 'Good' for logging. You can access your logs in the tmp/logs directory. https://github.com/spumko/good
server.register({
    register: require('good'),
    options: goodOptions
}, function (err) {
    if (err) {
        console.log(err);
        throw err;
    } else {
    }
});

//startup server
server.start();

//console
console.log("Presentation Started: " + server.info.uri);
console.log("Hapi Version: "+server.version);