const errorCodes = require('../helpers/error.codes.js');
const logger = require('../helpers/logger');

exports.errorHandler = (err, req, res, next) => {
  if (res.headersSent) {
    next(err);
    return;
  }
  logger.error(`A unexpected error occur, ${err}`);
  res.status(500).json(errorCodes.internalServerError);
};

exports.urlNotFound = (req, res) => {
  res.status(404).json({});
};
