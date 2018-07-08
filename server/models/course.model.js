const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courseSchema = new Schema({
  title: String,
  intro: String,
  url: String,
  details: Object,
  format: Object,
  effort: Object,
  skills: Array,
  price: Number,
  text: Array,
  objectives: Array,
  instructors: Array,
  topics: Array
});

const Course = mongoose.model('course', courseSchema, 'courses');
module.exports = Course;
