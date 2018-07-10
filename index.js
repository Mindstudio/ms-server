// ---------------------------------------------------- Base Config
require('dotenv').config();

// const config = require('./config/config');
const db = require('./config/database');
const app = require('./config/express');

module.exports = app;
