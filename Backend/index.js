const logger = require('./logger');
const express = require('express');
logger.info('Express module called');

const cors = require('cors');
logger.info('cors module called');

const Utils = require('./src/class/utils');
const utils = new Utils();
const handleMissingParameters = require('./src/utils/handleMissingParameters');
const ApiError = require('./src/utils/ApiError');
const errorMessages = require('./src/config/errorMessage');

const morgan = require('morgan');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
logger.info('jwt module called');

const app = express();
const fs = require('fs');
const path = require('path');
const { maskSensitiveData, filterHeaders } = require('./src/utils/filtering');

app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '16kb' }));
app.use(express.static('public'));

require('dotenv').config();
const { connectToDatabase } = require('./src/models/dbConnection');
const userRoutes = require('./src/routes/userRoutes');
const stockRoutes = require('./src/routes/stockRoutes');
const portfolioRoutes = require('./src/routes/portfolioRoutes');
const errorHandler = require('./src/middlewares/APIErrorHandler');

const publicKey = fs.readFileSync(path.join(__dirname, './public_key.pem'));

app.use((req, res, next) => {
  const startTime = Date.now();
  let decoded = null;
  let token = null;
  if (req.headers.authorization) {
    token = req.headers.authorization.split(' ')[1];
    decoded = jwt.verify(token, publicKey);
  }
  req.user = decoded;
  const userId = decoded?.userId || 'anonymous';
  req.body.id = userId;
  logger.info({
    timeStamp: new Date().toISOString(),
    userId: userId || 'anonymous',
    method: req.method,
    url: req.url,
    message: 'Request received',
    body: maskSensitiveData(req.body),
    headers: filterHeaders(req.headers),
    ip: req.ip
  });
  res.on('finish', () => {
    const responseTime = `${Date.now() - startTime}ms`;
    logger.info({
      timeStamp: new Date().toISOString(),
      userId: userId || 'anonymous',
      method: req.method,
      url: req.url,
      status: res.statusCode,
      responseTime,
      message: 'Response sent'
    });
  });
  next();
});

app.use('/api/v1/user', userRoutes);
logger.info('user module called');
app.use('/api/v1/stocks', stockRoutes);
logger.info('stock module called');
app.use('/api/v1/portfolio', portfolioRoutes);
logger.info('portfolio module called');

app.use(errorHandler);

connectToDatabase();

const port = process.env.PORT || 3000;
app.listen(process.env.PORT || 3000, () => {
  logger.info(`Server is running on port ${process.env.PORT}`);
  console.log(`Server is running on port ${process.env.PORT}`);
});

module.exports = app;
