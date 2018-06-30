const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const appSchema = new Schema({
  title: String,
  text: String,
  author: String,
  site: String,
  topic: String
});

const App = mongoose.model('app', appSchema, 'apps');
module.exports = App;
