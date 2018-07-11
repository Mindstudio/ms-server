const mongoose = require('mongoose');

// ---------------------------------------------------- DB Config
// mongo database
mongoose.connect(process.env.DB);

// set global.Promise
mongoose.Promise = global.Promise;

// mongoose connection
const db = mongoose.connection;
db.on("error", console.error.bind(console, "DB Connection Failed"));
db.once("open", (cb) => { console.log("DB Connection Successful") });

module.exports = db;
