const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const appSchema = new Schema({
  name: String,
  intro: String,
  site: Object,
  release: String,
  network: Object,
  price: Number,
  open_source: Boolean,
  license: String,
  reqs: Object,
  topics: Array
});

const App = mongoose.model('app', appSchema, 'apps');
module.exports = App;
