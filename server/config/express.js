// ---------------------------------------------------- Base Config
const app = require('express')();
const config = require('./config');

const helmet = require('helmet');
const bodyParser = require('body-parser');
const cors = require('cors');
const logger = require('morgan');

// Configure port
const port = config.port || 3000;
const env = config.env;

// Configure morgan as error logger
app.use(logger('dev'));

// Configure app to parse body params
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Configure various HTTP headers for security
app.use(helmet());

// Configure Cross Origin Resource Sharing
app.use(cors());

// ---------------------------------------------------- Router Config
const routes = require('../index.routes');

// express test route | fallback test if index test route fails
routes.get('/test', (req, res) => {
  res.json({ message: 'Mindstudio API: express test route'});
})

// Mount all routes on /api path
app.use('/api', routes);

// ---------------------------------------------------- Initiate Server
// Start the Server
app.listen(port, () => {
  console.log(`Express ${env} server LIVE on port ${port}`);
});

module.exports = app;
