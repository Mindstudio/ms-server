const Book = require('./book.model');

exports.createBook = (req, res) => {
  let book = new Book();
  book.title = req.body.title;
  book.author = req.body.author;
  book.summary = req.body.summary;
  book.isbn = req.body.isbn;
  book.genre = req.body.genre;

  book.save((err) => {
    if (err)
      res.send(err);

    res.json({ success: true, message: 'Book created.' });
  });
};

exports.findBooks = (req, res) => {
  Book.find((err, books) => {
    if (err)
      res.send(err);

    res.status(200);
    res.json(books);
  });
};

exports.findBookById = (req, res) => {
  Book.findById(req.params._id, (err, book) => {
    if (err)
      res.send(err);

    res.json(book);
  });
};

exports.updateBook = (req, res) => {
  Book.findById(req.params._id, (err, book) => {
    if (err)
      res.send(err);

    book.title = req.body.title;
    book.author = req.body.author;
    book.summary = req.body.summary;
    book.isbn = req.body.isbn;
    book.genre = req.body.genre;

    book.save((err) => {
      if (err)
        res.send(err);

      res.json({ success: true, message: 'Book updated.'});
    });
  });
};

exports.deleteBook = (req, res) => {
  Book.remove({
    _id: req.params._id
  }, (err, book) => {
    if (err)
      res.send(err);

    res.json({ success: true, message: 'Book deleted.'})
  })
};
