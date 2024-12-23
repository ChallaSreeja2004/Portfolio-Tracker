const { createLogger, format, transports } = require('winston');
const { combine, timestamp, json, colorize, prettyPrint } = format;
const istTimestampFormat = format((info) => {
  const timestamp = new Date();
  const istTimestamp = timestamp.toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  });
  info.timestamp = istTimestamp;
  return info;
});
const logger = createLogger({
  level: 'http',
  format: combine(istTimestampFormat(), json(), prettyPrint()),
  transports: [new transports.File({ filename: 'app.log' })]
});
module.exports = logger;
