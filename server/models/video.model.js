const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const videoSchema = new Schema({
  title: String,
  url: String,
  subject: String,
  date_pub: String,
  series: String,
  hosts: Array,
  topics: Array
});

const Video = mongoose.model('video', videoSchema, 'videos');
module.exports = Video;
