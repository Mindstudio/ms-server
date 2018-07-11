const genres = require('express').Router();

// ---------------------------------------------------- DB Config
// Configure Models
const Genre = require('./genre.model');

const ops = require('./genre.ops.js');

// Middleware for all requests
genres.use((req, res, next) => {
  // TODO: add middleware = logs, analytics, auth, etc
  console.log('LIVE: genre routes');
  next();
});

// ------------------------- /genres
genres.route('/').post(ops.createGenre);

genres.route('/').get(ops.findGenres);

// ------------------------- /genres/:genre_id
genres.route('/genre/:_id').get(ops.findGenreById);

genres.route('/genre/:_id').put(ops.updateGenre);

genres.route('/genre/:_id').delete(ops.deleteGenre);

// ------------------------- Test route
genres.get('/test', (req, res) => {
  res.json({ message: 'Mindstudio API: genres test route'});
});


module.exports = genres;
