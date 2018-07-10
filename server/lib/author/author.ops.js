const Author = require('./author.model');

exports.createAuthor = function(req, res) {
  let author = new Author();
  author.first_name = req.body.first_name;
  author.last_name = req.body.last_name;
  author.date_of_birth = req.body.date_of_birth;
  author.date_of_death = req.body.date_of_death;

  author.save(function(err) {
    if (err)
      res.send(err);

    res.json({ success: true, message: 'Author created.' });
  });
};

exports.findAuthors = function(req, res) {
  Author.find(function(err, authors) {
    if (err)
      res.send(err);

    res.json(authors);
  });
};

exports.findAuthorById = function(req, res) {
  Author.findById(req.params._id, function(err, author) {
    if (err)
      res.send(err);

    res.json(author);
  });
};

exports.updateAuthor = function(req, res) {
  Author.findById(req.params._id, function(err, author) {
    if (err)
      res.send(err);

    author.first_name = req.body.first_name;
    author.last_name = req.body.last_name;
    author.date_of_birth = req.body.date_of_birth;
    author.date_of_death = req.body.date_of_death;

    author.save(function(err) {
      if (err)
        res.send(err);

      res.json({ success: true, message: 'Author updated.'});
    });
  });
};

exports.deleteAuthor = function(req, res) {
  Author.remove({
    _id: req.params._id
  }, function(err, author) {
    if (err)
      res.send(err);

    res.json({ success: true, message: 'Author deleted.'})
  })
};
