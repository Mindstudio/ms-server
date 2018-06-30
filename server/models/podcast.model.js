const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const podcastSchema = new Schema({
  title: String,
  text: String,
  author: String,
  site: String,
  episode: String,
  topics: Array
});

const Podcast = mongoose.model('podcast', podcastSchema, 'podcasts');
module.exports = Podcast;
