const serverless = require('serverless-http');
const app = require('../server')(require('../routes/players'));

module.exports.handler = serverless(app);
