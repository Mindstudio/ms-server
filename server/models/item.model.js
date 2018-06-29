const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  name: String,
  info: String
});

const Item = mongoose.model('Item', itemSchema, 'items');
module.exports = Item;
