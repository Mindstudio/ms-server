const authors = require('express').Router();

// ---------------------------------------------------- DB Config
// Configure Models
const Author = require('./author.model');

const ops = require('./author.ops.js');

// Middleware for all requests
authors.use(function(req, res, next) {
  // TODO: add middleware = logs, analytics, auth, etc
  console.log('LIVE: author routes');
  next();
});

// ------------------------- /authors
authors.route('/').post(ops.createAuthor);

authors.route('/').get(ops.findAuthors);

// ------------------------- /authors/:author_id
authors.route('/author/:_id').get(ops.findAuthorById);

authors.route('/author/:_id').put(ops.updateAuthor);

authors.route('/author/:_id').delete(ops.deleteAuthor);

// ------------------------- author test route
authors.get('/test', function(req, res) {
  res.json({ message: 'Mindstudio API: authors test route'});
});


module.exports = authors;
