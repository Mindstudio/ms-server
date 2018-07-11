const books = require('express').Router();

// ---------------------------------------------------- DB Config
// Configure Models
const Book = require('./book.model');

const ops = require('./book.ops.js');

// Middleware for all requests
books.use((req, res, next) => {
  // TODO: add middleware = logs, analytics, auth, etc
  console.log('LIVE: book routes');
  next();
});

// ------------------------- /books
books.route('/').post(ops.createBook);

books.route('/').get(ops.findBooks);

// ------------------------- /books/:book_id
books.route('/book/:_id').get(ops.findBookById);

books.route('/book/:_id').put(ops.updateBook);

books.route('/book/:_id').delete(ops.deleteBook);

// ------------------------- Test route
books.get('/test', (req, res) => {
  res.json({ message: 'Mindstudio API: books test route'});
});


module.exports = books;
