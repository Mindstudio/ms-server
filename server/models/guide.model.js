const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const guideSchema = new Schema({
  title: String,
  text: String,
  author: String,
  topics: Array
});

const Guide = mongoose.model('guide', guideSchema, 'guides');
module.exports = Guide;
