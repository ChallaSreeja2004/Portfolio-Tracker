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
        return new APIResponse(200, 'No stocks found for the user');
      }
      let totalValue = 0;
      for (let stock of stocksList) {
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
  async getTopPerformingStock(payload) {
    const userId = payload;
    try {
      const stockList = await stocks.find({ userId });
      if (stockList.length == 0) {
        return new APIResponse(200, 'No stocks found for the user');
      }
      let topPerformingStock = null;
      for (let stock of stockList) {
        console.log(stock.stockTicker);
        const price = await utils.getRealTimeStockPrice(stock.stockTicker);
        if (price) {
          const stockPrice = price * stock.quantity;
          if (!topPerformingStock || stockPrice > topPerformingStock.value) {
            topPerformingStock = {
              stockName: stock.stockName,
              stockTicker: stock.stockTicker,
              value: stockPrice
            };
          }
        }
      }
      return new APIResponse(200, topPerformingStock);
    } catch (error) {
      console.log(error);
      throw new ApiError(
        errorMessages.INTERNAL_SERVER_ERROR.statusCode,
        errorMessages.INTERNAL_SERVER_ERROR.message,
        errorMessages.INTERNAL_SERVER_ERROR.errors
      );
    }
  }
  async getPortfolioDistribution(payload) {
    const userId = payload;
    try {
      const stocksList = await stocks.find({ userId });
      if (stocksList.length == 0) {
        return new APIResponse(200, 'No stocks found for the user');
      }
      let portfolioDistribution = {};
      for (let stock of stocksList) {
        const price = await utils.getRealTimeStockPrice(stock.stockTicker);
        if (price) {
          const stockPrice = price * stock.quantity;
          if (!portfolioDistribution[stock.stockTicker]) {
            portfolioDistribution[stock.stockTicker] = {
              stockName: stock.stockName,
              quantity: 0,
              value: 0
            };
          }
          portfolioDistribution[stock.stockTicker].quantity += stock.quantity;
          portfolioDistribution[stock.stockTicker].value += stockValue;
        }
      }
      return new APIResponse(200, portfolioDistribution);
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
