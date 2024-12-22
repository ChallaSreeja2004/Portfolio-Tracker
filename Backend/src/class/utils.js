const mongoose = require('mongoose');
const user = require('../models/user');
const stocks = require('../models/stocks');
class Utils {
  isValidObjectId(id) {
    return mongoose.Types.ObjectId.isValid(id);
  }

  async getRealTimeStockPrice(stockTicker) {
    const API_KEY = '6X7UJIBC33X9DSQO';
    const url = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${stockTicker}&interval=1min&apikey=${API_KEY}`;
    try {
      const response = await axios.get(url);
      const latestData = response.data['Time Series(1min)'];
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
