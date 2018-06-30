const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courseSchema = new Schema({
  title: String,
  topic: String
});

const Course = mongoose.model('course', courseSchema, 'courses');
module.exports = Course;
