// ---------------------------------------------------- Base Config

const config = require('./server/config/config');
const app = require('./server/config/express');
const db = require('./server/config/database');

module.exports = app;
