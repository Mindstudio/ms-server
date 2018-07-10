const books = require('express').Router();

// ---------------------------------------------------- DB Config
// Configure Models
const Book = require('./book.model');

const ops = require('./book.ops.js');

// Middleware for all requests
books.use(function(req, res, next) {
  // TODO: add middleware = logs, analytics, auth, etc
  console.log('Server: Book Routes LIVE');
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
books.get('/test', function(req, res) {
  res.json({ message: 'This is the Mindstudio API: Library / Books Routing'});
});


module.exports = books;
