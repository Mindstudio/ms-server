// ---------------------------------------------------- Base Config
const express = require('express');
const app = express();

const helmet = require('helmet');
const bodyParser = require('body-parser');
const cors = require('cors');
const logger = require('morgan');

// Configure port
const port = process.env.PORT || 3000;

// Configure morgan as error logger
app.use(logger('combined'));

// Configure app to parse body params
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Configure various HTTP headers for security
app.use(helmet());

// Configure Cross Origin Resource Sharing
app.use(cors());


// ---------------------------------------------------- DB Config
// Configure Models
const Book = require('../server/modules/lib/book/book.model');

// ---------------------------------------------------- Router Config
const router = express.Router();

// Middleware for all requests
router.use(function(req, res, next) {
  // TODO: logging
  console.log('Server working');
  next();
});

// Test router
router.get('/', function(req, res) {
  res.json({ message: 'This is the Mindstudio API'});
})


// ------------------------- /books
router.route('/books')
  .post(function(req, res) {
    let book = new Book();
    book.title = req.body.title;
    book.author = req.body.author;
    book.summary = req.body.summary;
    book.isbn = req.body.isbn;
    book.genre = req.body.genre;

    book.save(function(err) {
      if (err)
        res.send(err);

      res.json({ message: 'Book created.' });
    });
  })
  .get(function(req, res) {
    Book.find(function(err, books) {
      if (err)
        res.send(err);
      res.json(books);
    });
  });

// ------------------------- /books/:book_id
router.route('/books/:book_id')

  .get(function(req, res) {
    Book.findById(req.params.book_id, function(err, book) {
      if (err)
        res.send(err);
      res.json(book);
    });
  })

  .put(function(req, res) {
    Book.findById(req.params.book_id, function(err, book) {
      if (err)
        res.send(err);

      book.title = req.body.title;
      book.author = req.body.author;
      book.summary = req.body.summary;
      book.isbn = req.body.isbn;
      book.genre = req.body.genre;

      book.save(function(err) {
        if (err)
          res.send(err);
        res.json({ message: 'Book updated.'});
      });
    });
  })

  .delete(function(req, res) {
    Book.remove({
      _id: req.params.book_id
    }, function(err, book) {
      if (err)
        res.send(err);
      res.json({ message: 'Book deleted.'})
    })
  })

// Mount all routes on /api path
app.use('/api', router);

// ---------------------------------------------------- Initiate Server
// Start the Server
app.listen(port);
console.log(`Express server listening on port ${port}`);

module.exports = app;
