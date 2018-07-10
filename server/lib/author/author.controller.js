const Author = require('../Models/authorModel');

// Display all authors
exports.author_list = function(req, res) {
  res.send(`NOT IMPLEMENTED: Author List`);
};

// Display details page for a specific Author
exports.author_detail = function(req, res) {
  res.send(`NOT IMPLEMENTED: Author details: ${req.params.id}`);
};

// Display Author create form on GET
exports.author_create_get = function(req, res) {
  res.send(`NOT IMPLEMENTED: Author create GET`);
};

// Handle Auther create on POST
exports.author_create_post = function(req, res) {
  res.send(`NOT IMPLEMENTED: Author create POST`);
};

// Display Author delete form on GET
exports.author_delete_get = function(req, res) {
  res.send(`NOT IMPLEMENTED: Author delete GET`);
};

// Handle Author delete on POST
exports.author_delete_post = function(req, res) {
  res.send(`NOT IMPLEMENTED: Author delete POST`);
};

// Display Author update form on GET
exports.author_update_get = function(req, res) {
  res.send(`NOT IMPLEMENTED: Author upddate GET`);
};

// Handle Author update on POST
exports.author_update_post = function(req, res) {
  res.send(`NOT IMPLEMENTED: Author update POST`);
};
