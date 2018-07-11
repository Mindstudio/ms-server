// ---------------------------------------------------- Base Config

const config = require('./config/config');
const app = require('./config/express');
const db = require('./config/database');

module.exports = app;
