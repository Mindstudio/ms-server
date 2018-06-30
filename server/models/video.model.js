const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const videoSchema = new Schema({
  title: String,
  topic: String,
  series: Boolean
});

const Video = mongoose.model('video', videoSchema, 'videos');
module.exports = Video;
