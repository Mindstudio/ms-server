// Packages
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

// Model imports
// const Item = require('../models/item.model.js');
const Article = require('../models/article.model.js');
const Book = require('../models/book.model.js');
const Course = require('../models/course.model.js');
const Guide = require('../models/guide.model.js');
const Podcast = require('../models/podcast.model.js');
const App = require('../models/app.model.js');
const Video = require('../models/video.model.js');
const Website = require('../models/website.model.js');

// Model declarations
  // const itemModel = 'name info';
const articleModel = 'title intro text subject reading_time url authors publisher topics';
const bookModel = 'title intro text authors year_pub subject topics';
const courseModel = 'title intro url details format effort skills price text objectives instructors topics';
const guideModel = 'title url authors updated intro text subject skills software topics';
const podcastModel = 'title intro subject url hosts episodes topics';
const appModel = 'name intro site release network price open_source license reqs topics';
const videoModel = 'title url subject date_pub series hosts topics';
const websiteModel = 'name url subject intro img founders year_pub network topics';

// Mongoose config
mongoose.connect('mongodb://localhost:27017/mindstudio');
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection Failed"));
db.once("open", function(callback){ console.log("Connection Successful") });
// db.once("open", (cb) => { console.log("Connection Successful") });

// Express app config
const app = express();
app.use(cors());
app.use(bodyParser.json())
// ------------------------------------------------ Server CRUD API

// READ: all

  // app.get('/items', (req, res) => {
  //   Item.find({}, itemModel, function (err, items) {
  //     if (err) { console.error(err) }
  //     res.send({
  //       items: items
  //     })
  //   }).sort({_id:-1})
  // });

app.get('/articles', (req, res) => {
  Article.find({}, articleModel, function (err, articles) {
    if (err) { console.error(err) }
    res.send({
      articles: articles
    })
  }).sort({_id:-1})
});

app.get('/books', (req, res) => {
  Book.find({}, bookModel, function (err, books) {
    if (err) { console.log(err) }
    res.send({
      books: books
    })
  }).sort({_id:-1})
});

app.get('/courses', (req, res) => {
  Course.find({}, courseModel, function (err, courses) {
    if (err) { console.log(err) }
    res.send({
      courses: courses
    })
  }).sort({_id:-1})
});

app.get('/guides', (req, res) => {
  Guide.find({}, guideModel, function (err, guides) {
    if (err) { console.log(err) }
    res.send({
      guides: guides
    })
  }).sort({_id:-1})
});

app.get('/podcasts', (req, res) => {
  Podcast.find({}, podcastModel, function (err, podcasts) {
    if (err) { console.error(err) }
    res.send({
      podcasts: podcasts
    })
  }).sort({_id:-1})
});

app.get('/apps', (req, res) => {
  App.find({}, appModel, function (err, apps) {
    if (err) { console.log(err) }
    res.send({
      apps: apps
    })
  }).sort({_id:-1})
});

app.get('/videos', (req, res) => {
  Video.find({}, videoModel, function (err, videos) {
    if (err) { console.log(err) }
    res.send({
      videos: videos
    })
  }).sort({_id:-1})
});

app.get('/websites', (req, res) => {
  Website.find({}, websiteModel, function (err, websites) {
    if (err) { console.log(err) }
    res.send({
      websites: websites
    })
  }).sort({_id:-1})
});

// ------------------------------------------------ Initiate Server
// Server Port
app.listen(process.env.PORT || 8081 );
