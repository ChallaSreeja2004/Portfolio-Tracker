const stocks = require('../models/stocks');
const user = require('../models/user');
const mongoose = require('mongoose');
const APIResponse = require('../utils/APIResponse');
const errorMessages = require('../config/errorMessage');
const ApiError = require('../utils/ApiError');
const Utils = require('./utils');
const utils = new Utils();
class portfolio {
  async getPortfolioValue(payload) {
    const userId = payload;
    try {
      const stocksList = await stocks.find({ userId });
      if (stocksList.length == 0) {
        throw new ApiError(
          errorMessages.NO_STOCKS_FOUND.statusCode,
          errorMessages.NO_STOCKS_FOUND.message,
          errorMessages.NO_STOCKS_FOUND.errors
        );
      }
      let totalValue = 0;
      for (let stock in stocksList) {
        const price = await utils.getRealTimeStockPrice(stock.stockTicker);
        if (price) {
          totalValue += price * stock.quantity;
        }
      }
      return new APIResponse(200, totalValue);
    } catch (error) {
      console.log(error);
      throw new ApiError(
        errorMessages.INTERNAL_SERVER_ERROR.statusCode,
        errorMessages.INTERNAL_SERVER_ERROR.message,
        errorMessages.INTERNAL_SERVER_ERROR.errors
      );
    }
  }
}
module.exports = portfolio;
