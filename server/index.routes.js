const routes = require('express').Router();

const books = require('./lib/book/book.index')
const authors = require('./lib/author/author.index')
const genres = require('./lib/genre/genre.index')

// Middleware for all requests
routes.use(function(req, res, next) {
  // TODO: add middleware = logs, analytics, auth, etc
  console.log('LIVE: index routes');
  next();
});

routes.get('/', (req, res) => {
  res.json({ message: 'Connected to API!'});
});

// Test router
routes.get('/test', function(req, res) {
  res.json({ message: 'Mindstudio API: index test route'});
});

// Test router
routes.get('/status', function(req, res) {
  res.json({ message: 'Mindstudio API: Status Report '});
});

routes.use('/books', books);
routes.use('/authors', authors);
routes.use('/genres', genres);

module.exports = routes;
