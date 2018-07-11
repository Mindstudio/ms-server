const Genre = require('./genre.model');

exports.createGenre = (req, res) => {
  let genre = new Genre();
  genre.name = req.body.name;

  genre.save((err) => {
    if (err)
      res.send(err);

    res.json({ success: true, message: 'Genre created.' });
  });
};

exports.findGenres = (req, res) => {
  Genre.find((err, genres) => {
    if (err)
      res.send(err);

    res.json(genres);
  });
};

exports.findGenreById = (req, res) => {
  Genre.findById(req.params._id, (err, genre) => {
    if (err)
      res.send(err);

    res.json(genre);
  });
};

exports.updateGenre = (req, res) => {
  Genre.findById(req.params._id, (err, genre) => {
    if (err)
      res.send(err);

    genre.name = req.body.name;

    genre.save((err) => {
      if (err)
        res.send(err);

      res.json({ success: true, message: 'Genre updated.'});
    });
  });
};

exports.deleteGenre = (req, res) => {
  Genre.remove({
    _id: req.params._id
  }, (err, genre) => {
    if (err)
      res.send(err);

    res.json({ success: true, message: 'Genre deleted.'})
  })
};
