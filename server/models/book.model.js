const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: String,
  intro: String,
  text: Array,
  authors: Array,
  year_pub: String,
  subject: String,
  topics: Array
});

const Book = mongoose.model('book', bookSchema, 'books');
module.exports = Book;
