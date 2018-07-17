const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema(
  {
    title: {type: String, required: true},
    author: {type: Schema.ObjectId, ref: 'Author'},
    summary: {type: String, required: true},
    isbn: {type: String, required: true},
    genre: [{type: Schema.ObjectId, ref: 'Genre'}],
    status: {type: Boolean, required: true, default: false}
  }
);

// Virtual for book's URL
BookSchema
.virtual('url')
.get(() => `/lib/books/book/${this._id}`);

//Export model
const Book = mongoose.model('Book', BookSchema, 'Books');
module.exports = Book;
