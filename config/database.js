const mongoose = require('mongoose');

const config = require('./config');

// ---------------------------------------------------- DB Config
// mongo database
mongoose.connect(config.mongo.host);

// set global.Promise
mongoose.Promise = global.Promise;

// mongoose connection
const db = mongoose.connection;
db.on("error", console.error.bind(console, "DB Connection Failed"));
db.once("open", (cb) => { console.log("DB Connection Successful") });

module.exports = db;
