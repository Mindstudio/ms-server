const Genre = require('./genre.model');

exports.createGenre = (req, res) => {
  let genre = new Genre();
  genre.name = req.body.name;

  genre.save((err) => {
    if (err)
      res.status(400).send(err);

    res.status(200).json({ success: true, message: 'Genre created.' });
  });
};

exports.findGenres = (req, res) => {
  Genre.find((err, genres) => {
    if (err)
      res.status(400).send(err);

    res.status(200).json(genres);
  });
};

exports.findGenreById = (req, res) => {
  Genre.findById(req.params._id, (err, genre) => {
    if (err)
      res.status(400).send(err);

    res.status(200).json(genre);
  });
};

exports.updateGenre = (req, res) => {
  Genre.findById(req.params._id, (err, genre) => {
    if (err)
      res.status(400).send(err);

    genre.name = req.body.name;

    genre.save((err) => {
      if (err)
        res.status(400).send(err);

      res.status(200).json({ success: true, message: 'Genre updated.'});
    });
  });
};

exports.deleteGenre = (req, res) => {
  Genre.remove({
    _id: req.params._id
  }, (err, genre) => {
    if (err)
      res.status(400).send(err);

    res.status(200).json({ success: true, message: 'Genre deleted.'})
  })
};
