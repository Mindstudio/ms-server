// Packages
const express = require('express');
const mongoose = require('mongoose');

// Model imports
const Item = require('../models/item.model.js');

// Model declarations
const itemModel = 'name info';

// Mongoose config
mongoose.connect('mongodb://localhost:27017/mindstudio');
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection Failed"));
db.once("open", function(callback){ console.log("Connection Successful") });
// db.once("open", (cb) => { console.log("Connection Successful") });

// Express app config
const app = express();

// ------------------------------------------------ Server CRUD API

// READ: all items
app.get('/items', (req, res) => {
  Item.find({}, itemModel, function (err, items) {
    if (err) { console.error(err); }
    res.send({
      items: items
    })
  }).sort({_id:-1})
});

// ------------------------------------------------ Initiate Server
// Server Port
app.listen(process.env.PORT || 8081 );
