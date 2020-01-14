const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const expressConf = require('../helpers/express');

const app = express();

app.use(cors());
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));

module.exports = (route) => {
  // APP dynamic routes
  app.use('/', route);
  // APP ErrorHandler
  app.use(expressConf.errorHandler);
  // APP UrlNotFound
  app.use(expressConf.urlNotFound);

  return app;
};
