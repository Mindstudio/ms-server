const routes = require('express').Router();

const books = require('./lib/book/book.index')

const authors = require('./dir/author/author.index')
const genres = require('./dir/genre/genre.index')

// const routeHandler = (req, res, next) => {
//   res.json({
//     status: 'success',
//     data: req.body
//   })
// };

// Middleware for all requests
routes.use((req, res, next) => {
  // TODO: add middleware = logs, analytics, auth, etc
  console.log('LIVE: index routes');
  next();
});

routes.get('/', (req, res) => {
  res.json({ message: 'Connected to API!'});
});

// Test router
routes.get('/test', (req, res) => {
  res.json({ message: 'Mindstudio API: index test route'});
});

// Status router
routes.get('/status', (req, res) => {
  res.json({ message: 'Mindstudio API: Status Report '});
});

routes.use('/books', books);
routes.use('/authors', authors);
routes.use('/genres', genres);

module.exports = routes;
