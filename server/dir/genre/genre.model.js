const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GenreSchema = new Schema(
  {
    name: {type: String, min: 3, max: 100}
  }
);

// Virtual for genre's URL
GenreSchema
.virtual('url')
.get(() => `/dir/genres/genre/${this._id}`);

// Export Genre
const Genre = mongoose.model('Genre', GenreSchema, 'Genres');
module.exports = Genre;
