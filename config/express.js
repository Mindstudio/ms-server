const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const logger = require('morgan');
const helmet = require('helmet');

const routes = require('../index.route');
const config = require('./config');

const app = express();

// use logger if in dev mode
if (config.env === 'dev') {
  app.use(logger('dev'));
}

// parse body params, attach to req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// set various HTTP headers for security
app.use(helmet());

// enable CORS - Cross Origin Resource Sharing
app.use(cors());

// mount all routes on /api path
app.use('/api', routes);

// catch 404 and forward to error handler TODO: move to config/APIerror.js
app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler TODO: move to config/APIerror.js
app.use(function(err, req, res, next) {
  // set locals, only providing error in dev
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'dev' ? err : {};

  // render error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
