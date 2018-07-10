// ---------------------------------------------------- Base Config
const mongoose = require('mongoose');

// config
// const config = require('./config/config');
const app = require('./config/express');

// ---------------------------------------------------- DB Config
// mongo database
mongoose.connect('mongodb://localhost:27017/ms-lib');

// set global.Promise
mongoose.Promise = global.Promise;

// mongoose connection
const db = mongoose.connection;
db.on("error", console.error.bind(console, "DB Connection Failed"));
db.once("open", function(callback){ console.log("DB Connection Successful") });

module.exports = app;
