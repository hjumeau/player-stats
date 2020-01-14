const winston = require('winston');

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({
      handleExceptions: true,
      humanReadableUnhandledException: true,
      level: 'debug',
      timestamp: () => new Date().toISOString(),
      colorize: true,
    }),
  ],
});

module.exports = logger;
