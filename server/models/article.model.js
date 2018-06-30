const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  title: String,
  text: String,
  author: String,
  site: String
});

const Article = mongoose.model('article', articleSchema, 'articles');
module.exports = Article;
