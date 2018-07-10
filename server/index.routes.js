const routes = require('express').Router();

const books = require('./lib/book/book.index')

routes.get('/', (req, res) => {
  res.json({ message: 'Connected to Routes!'});
});

// Test router
routes.get('/test', function(req, res) {
  res.json({ message: 'This is the Mindstudio API test'});
})

routes.use('/books', books);

module.exports = routes;
