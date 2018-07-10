const express = require('express');
const router = express.Router();

// GET home page.
router.get('/lib', function(req, res) {
  res.redirect('/library');
});

module.exports = router;
