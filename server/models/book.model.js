const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: String,
  author: String,
  topic: String
});

const Book = mongoose.model('book', bookSchema, 'books');
module.exports = Book;
