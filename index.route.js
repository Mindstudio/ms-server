const express = require('express');
const bookRoutes = require('./server/modules/lib/book/book.route')

const router = express.Router();

router.use('/books', bookRoutes);

module.exports = router;
