const mongoose = require('mongoose');

// config
// const config = require('./config/config');
const app = require('./config/express');

// mongo database
mongoose.connect('mongodb://localhost:27017/ms-lib');

// set global.Promise
mongoose.Promise = global.Promise;

// mongoose connection
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection Failed"));
db.once("open", function(callback){ console.log("Connection Successful") });

module.exports = app;
