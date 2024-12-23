const stocks = require('../models/stocks');
const user = require('../models/user');
const mongoose = require('mongoose');
const APIResponse = require('../utils/APIResponse');
const errorMessages = require('../config/errorMessage');
const ApiError = require('../utils/ApiError');
const Utils = require('../class/utils');
const utils = new Utils();
class Stocks {
  async storeStockDetails(payload) {
    const { userId, stockName, stockTicker, quantity, buyPrice, dateOfBuy } =
      payload;
    try {
      const findUser = await user.findOne({ _id: userId });
      if (!findUser) {
        throw new ApiError(
          errorMessages.USER_NOT_FOUND.statusCode,
          errorMessages.USER_NOT_FOUND.message,
          errorMessages.USER_NOT_FOUND.errors
        );
      }
      const stock = new stocks({
        userId,
        stockName,
        stockTicker,
        quantity,
        buyPrice,
        dateOfBuy
      });
      const response = await stock.save();
      return new APIResponse(200, response);
    } catch (error) {
      console.log(error);
      throw new ApiError(
        errorMessages.INTERNAL_SERVER_ERROR.statusCode,
        errorMessages.INTERNAL_SERVER_ERROR.message,
        errorMessages.INTERNAL_SERVER_ERROR.errors
      );
    }
  }
  async getAllStocksByUserId(payload) {
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
      return new APIResponse(200, stocksList);
    } catch (error) {
      console.log(error);
      throw new ApiError(
        errorMessages.INTERNAL_SERVER_ERROR.statusCode,
        errorMessages.INTERNAL_SERVER_ERROR.message,
        errorMessages.INTERNAL_SERVER_ERROR.errors
      );
    }
  }
  async editStockDetails(payload) {
    const { stockId, userId, quantity } = payload;
    try {
      const findStock = await stocks.findOne({ _id: stockId, userId });
      if (!findStock) {
        throw new ApiError(
          errorMessages.STOCK_NOT_FOUND.statusCode,
          errorMessages.STOCK_NOT_FOUND.message,
          errorMessages.STOCK_NOT_FOUND.errors
        );
      }
      const updatedStock = await stocks.findByIdAndUpdate(
        stockId,
        {
          $set: { quantity }
        },
        { new: true }
      );
      return new APIResponse(200, updatedStock);
    } catch (error) {
      console.log(error);
      throw new ApiError(
        errorMessages.INTERNAL_SERVER_ERROR.statusCode,
        errorMessages.INTERNAL_SERVER_ERROR.message,
        errorMessages.INTERNAL_SERVER_ERROR.errors
      );
    }
  }
  async deleteStockDetails(payload) {
    const { stockId, userId } = payload;
    try {
      const findStock = await stocks.findOne({ _id: stockId, userId });
      if (!findStock) {
        throw new ApiError(
          errorMessages.STOCK_NOT_FOUND.statusCode,
          errorMessages.STOCK_NOT_FOUND.message,
          errorMessages.STOCK_NOT_FOUND.errors
        );
      }
      const stock = await stocks.findByIdAndDelete(stockId);
      return new APIResponse(200, stock);
    } catch (error) {
      console.log(error);
      throw new ApiError(
        errorMessages.INTERNAL_SERVER_ERROR.statusCode,
        errorMessages.INTERNAL_SERVER_ERROR.message,
        errorMessages.INTERNAL_SERVER_ERROR.errors
      );
    }
  }

  async getRealTimeStockPrice(payload) {
    const stockTicker = payload;
    try {
      const price = utils.getRealTimeStockPrice(stockTicker);
      if (!price) {
        throw new ApiError(
          errorMessages.STOCK_PRICE_NOT_FOUND.statusCode,
          errorMessages.STOCK_PRICE_NOT_FOUND.message,
          errorMessages.STOCK_PRICE_NOT_FOUND.errors
        );
      }
      return new APIResponse(200, price);
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
module.exports = Stocks;
