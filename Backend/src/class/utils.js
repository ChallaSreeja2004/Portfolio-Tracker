const mongoose = require('mongoose');
const user = require('../models/user');
const stocks = require('../models/stocks');
const axios = require('axios');
class Utils {
  isValidObjectId(id) {
    return mongoose.Types.ObjectId.isValid(id);
  }

  async getRealTimeStockPrice(payload) {
    const stockTicker = payload;
    const API_KEY = process.env.ALPHAVANTAGE_API_KEY;
    const url = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${stockTicker}&interval=5min&apikey=${API_KEY}`;
    try {
      const response = await axios.get(url);
      if (response.data && response.data['Time Series (5min)']) {
        const timeSeries = response.data['Time Series (5min)'];
        const latestTime = Object.keys(timeSeries)[0];
        const latestData = timeSeries[latestTime];

        return latestData['4. close'];
      } else {
        throw new Error('No stock data available for the ticker.');
      }
    } catch (error) {
      console.error('Error fetching stock price:', error.message);
      throw new Error('Unable to fetch real-time stock price.');
    }
  }
}

module.exports = Utils;
