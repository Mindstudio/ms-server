const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const websiteSchema = new Schema({
  name: String,
  url: String,
  subject: String,
  intro: Array,
  img: String,
  founders: Array,
  year_pub: String,
  network: Object,
  topics: Array
});

const Website = mongoose.model('website', websiteSchema, 'websites');
module.exports = Website;
