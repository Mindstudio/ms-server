const Author = require('./author.model');

exports.createAuthor = (req, res) => {
  let author = new Author();
  author.first_name = req.body.first_name;
  author.last_name = req.body.last_name;
  author.date_of_birth = req.body.date_of_birth;
  author.date_of_death = req.body.date_of_death;

  author.save((err) => {
    if (err) {
      return res.status(400).send(err);
    } else {
      return res.status(200).json({ success: true, message: 'Author created.' });
    }
  });
};

exports.findAuthors = (req, res) => {
  Author.find((err, authors) => {
    if (err) {
      return res.status(400).send(err);
    } else {
      return res.status(200).json(authors);
    }
  });
};

exports.findAuthorById = (req, res) => {
  Author.findById(req.params._id, (err, author) => {
    if (err) {
      return res.status(400).send(err);
    } else {
      return res.status(200).json(author);
    }
  });
};

exports.updateAuthor = (req, res) => {
  Author.findById(req.params._id, (err, author) => {
    if (err) {
      return res.status(400).send(err);
    } else {
      author.first_name = req.body.first_name;
      author.last_name = req.body.last_name;
      author.date_of_birth = req.body.date_of_birth;
      author.date_of_death = req.body.date_of_death;
    }

    author.save((err) => {
      if (err) {
        return res.status(400).send(err);
      } else {
        return res.status(200).json({ success: true, message: 'Author updated.'});
      }
    });
  });
};

exports.deleteAuthor = (req, res) => {
  Author.remove({
    _id: req.params._id
  }, (err, author) => {
    if (err) {
      return res.status(400).send(err);
    } else {
      return res.status(200).json({ success: true, message: 'Author deleted.'})
    }
  });
};
