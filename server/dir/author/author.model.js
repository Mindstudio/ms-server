const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AuthorSchema = new Schema(
  {
    first_name: {type: String, required: true, max: 100},
    last_name: {type: String, required: true, max: 100},
    date_of_birth: {type: Date},
    date_of_death: {type: Date}
  }
);

// Virtual for author's full name
AuthorSchema
.virtual('name')
.get(() => `${this.first_name} ${this.last_name}`);

// Virtual for author's URL
AuthorSchema
.virtual('url')
.get(() => `/dir/authors/author/${this._id}`);

//Export model
const Author = mongoose.model('Author', AuthorSchema, 'Authors');
module.exports = Author;
