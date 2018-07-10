const Genre = require('./genre.model');

exports.createGenre = function(req, res) {
  let genre = new Genre();
  genre.name = req.body.name;

  genre.save(function(err) {
    if (err)
      res.send(err);

    res.json({ success: true, message: 'Genre created.' });
  });
};

exports.findGenres = function(req, res) {
  Genre.find(function(err, genres) {
    if (err)
      res.send(err);

    res.json(genres);
  });
};

exports.findGenreById = function(req, res) {
  Genre.findById(req.params._id, function(err, genre) {
    if (err)
      res.send(err);

    res.json(genre);
  });
};

exports.updateGenre = function(req, res) {
  Genre.findById(req.params._id, function(err, genre) {
    if (err)
      res.send(err);

    genre.name = req.body.name;

    genre.save(function(err) {
      if (err)
        res.send(err);

      res.json({ success: true, message: 'Genre updated.'});
    });
  });
};

exports.deleteGenre = function(req, res) {
  Genre.remove({
    _id: req.params._id
  }, function(err, genre) {
    if (err)
      res.send(err);

    res.json({ success: true, message: 'Genre deleted.'})
  })
};
