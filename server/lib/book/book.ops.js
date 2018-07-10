const Book = require('./book.model');

exports.createBook = function(req, res) {
  let book = new Book();
  book.title = req.body.title;
  book.author = req.body.author;
  book.summary = req.body.summary;
  book.isbn = req.body.isbn;
  book.genre = req.body.genre;

  book.save(function(err) {
    if (err)
      res.send(err);

    res.json({ success: true, message: 'Book created.' });
  });
};

exports.findBooks = function(req, res) {
  Book.find(function(err, books) {
    if (err)
      res.send(err);

    res.json(books);
  });
};

exports.findBookById = function(req, res) {
  Book.findById(req.params._id, function(err, book) {
    if (err)
      res.send(err);

    res.json(book);
  });
};

exports.updateBook = function(req, res) {
  Book.findById(req.params._id, function(err, book) {
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

      res.json({ success: true, message: 'Book updated.'});
    });
  });
};

exports.deleteBook = function(req, res) {
  Book.remove({
    _id: req.params._id
  }, function(err, book) {
    if (err)
      res.send(err);

    res.json({ success: true, message: 'Book deleted.'})
  })
};
