// ---------------------------------------------------- Base Config
const app = require('express')();

const helmet = require('helmet');
const bodyParser = require('body-parser');
const cors = require('cors');
const logger = require('morgan');

// Configure port
const port = process.env.PORT || 3000;

// Configure morgan as error logger
app.use(logger('combined'));

// Configure app to parse body params
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Configure various HTTP headers for security
app.use(helmet());

// Configure Cross Origin Resource Sharing
app.use(cors());


// ---------------------------------------------------- Router Config
const routes = require('../server/index.routes');

// express test route | fallback test if index test route fails
routes.get('/test', function(req, res) {
  res.json({ message: 'Mindstudio API: express test route'});
})

// Mount all routes on /api path
app.use('/api', routes);

// ---------------------------------------------------- Initiate Server
// Start the Server
app.listen(port);
console.log(`Express server listening on port ${port}`);

module.exports = app;
