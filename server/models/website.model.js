const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const websiteSchema = new Schema({
  name: String,
  img: String,
  url: String,
  topic: String
});

const Website = mongoose.model('website', websiteSchema, 'websites');
module.exports = Website;
