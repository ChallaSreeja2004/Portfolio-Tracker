const mongoose = require('mongoose');
const logger = require('../../logger');
connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: 'PortfolioTracker'
    });
    logger.info('Connected to database');
  } catch (error) {
    console.log(error);
    logger.error('Error connecting to database', error);
    process.exit(1);
  }
};
module.exports = { connectToDatabase };
