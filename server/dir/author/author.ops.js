const Author = require('./author.model');

exports.createAuthor = (req, res) => {
  let author = new Author();
  author.first_name = req.body.first_name;
  author.last_name = req.body.last_name;
  author.date_of_birth = req.body.date_of_birth;
  author.date_of_death = req.body.date_of_death;

  author.save((err) => {
    if (err)
      res.send(err);

    res.json({ success: true, message: 'Author created.' });
  });
};

exports.findAuthors = (req, res) => {
  Author.find((err, authors) => {
    if (err)
      res.send(err);

    res.json(authors);
  });
};

exports.findAuthorById = (req, res) => {
  Author.findById(req.params._id, (err, author) => {
    if (err)
      res.send(err);

    res.json(author);
  });
};

exports.updateAuthor = (req, res) => {
  Author.findById(req.params._id, (err, author) => {
    if (err)
      res.send(err);

    author.first_name = req.body.first_name;
    author.last_name = req.body.last_name;
    author.date_of_birth = req.body.date_of_birth;
    author.date_of_death = req.body.date_of_death;

    author.save((err) => {
      if (err)
        res.send(err);

      res.json({ success: true, message: 'Author updated.'});
    });
  });
};

exports.deleteAuthor = (req, res) => {
  Author.remove({
    _id: req.params._id
  }, (err, author) => {
    if (err)
      res.send(err);

    res.json({ success: true, message: 'Author deleted.'})
  })
};
