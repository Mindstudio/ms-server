const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const podcastSchema = new Schema({
  title: String,
  intro: Array,
  subject: String,
  url: String,
  hosts: Array,
  episodes: Array,
  topics: Array
});

const Podcast = mongoose.model('podcast', podcastSchema, 'podcasts');
module.exports = Podcast;
