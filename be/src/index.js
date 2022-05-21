const express = require('express');
const logger = require('./config/logger');
const compress = require('compression');
const cors = require('cors');
const httpStatus = require('http-status');
const morgan = require('./config/morgan');
const helmet = require('helmet');
const config = require('./config/config');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = global.app = express();



// parse body params and attache them to req.body
app.use(express.json());

app.use(compress());

// secure apps by setting various HTTP headers
app.use(helmet());

// enable CORS - Cross Origin Resource Sharing
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', '*');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

if (config.env !== 'test') {
    app.use(morgan.successHandler);
    app.use(morgan.errorHandler);
}

app.use('', routes);

// catch 404 and forward to error handler
app.use((req, res, next) => {
    const err = { message: 'API not found', status: httpStatus.NOT_FOUND };
    return next(err);
});

app.use((err, req, res, next) => {
    console.log(err);
    let { status, message } = err;
    if (config.env === 'production' && !err.isOperational) {
        status = httpStatus.INTERNAL_SERVER_ERROR;
        message = httpStatus[httpStatus.INTERNAL_SERVER_ERROR];
    }

    res.locals.errorMessage = err.message;

    const response = {
        code: status,
        message,
    };

    if (config.env === 'development') {
        logger.error(err);
    }

    res.status(status).send(response);
});
const server = require("http").createServer(app);
const io = global.io = require("socket.io")(server);
server.listen(8080, () => {
    console.log("server starting on port : " + 8080)
    require("./socket")(io);
  });
(async () => {
    try {
        await mongoose.connect(config.mongoose.url, config.mongoose.options);
        logger.info('Connected to MongoDB');
    } catch (error) {
        logger.error(error);
    }
})();