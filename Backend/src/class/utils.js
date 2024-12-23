const mongoose = require('mongoose');
const user = require('../models/user');
const stocks = require('../models/stocks');
const axios = require('axios');
class Utils {
  isValidObjectId(id) {
    return mongoose.Types.ObjectId.isValid(id);
  }

  async getRealTimeStockPrice(stockTicker) {
    const API_KEY = process.env.ALPHAVANTAGE_API_KEY;
    const url = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${stockTicker}&interval=5min&apikey=${API_KEY}`;
    try {
      const response = await axios.get(url);
      const latestData = response.data['Time Series(1min)'];
      if (!latestData) {
        console.error('Invalid data format or no data returned');
        return null;
      }
      const latestPrice = latestData
        ? latestData[Object.keys(latestData)[0]]['1. open']
        : null;
      return parseFloat(latestPrice);
    } catch (error) {
      console.log('Error in fetching stock price', error);
    }
  }
}
module.exports = Utils;
