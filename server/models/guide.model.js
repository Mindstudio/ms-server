const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const guideSchema = new Schema({
  title: String,
  url: String,
  authors: Array,
  updated: String,
  intro: String,
  text: Object,
  subject: String,
  skills: Array,
  software: Array,
  topics: Array
});

const Guide = mongoose.model('guide', guideSchema, 'guides');
module.exports = Guide;
