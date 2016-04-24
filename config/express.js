var config = require('./config'),
    express = require('express'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    compress = require('compression'),
    methodOverride = require('method-override'),
    session = require("express-session");

module.exports = function(){
    var app = express();

    //environment setting
    if (process.env.NODE_ENV === "development"){
        app.use(morgan('dev'));
    } else if (process.env.NODE_ENV === "production"){
        app.use(compress());
    }

    // middlewares
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
    app.use(methodOverride());
    app.use(session({
        saveUninitialized: true,
        resave: true,
        secret: config.sessionSecret
    }));
    
    // set engines
    app.set('views', './app/views/');
    app.set('view engine', 'ejs');

    // set RESTful routes
    require('../app/routes/index.server.route.js')(app);
    require('../app/routes/passage.server.route.js')(app);

    // always place it at last
    app.use(express.static('./public')); //static file path

    return app;
};