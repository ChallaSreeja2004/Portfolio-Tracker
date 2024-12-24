const Stocks = require('../class/stocks');
const stocks = new Stocks();
const handleMissingParameters = require('../utils/handleMissingParameters');
const Utils = require('../class/utils');
const utils = new Utils();
const errorMessages = require('../config/errorMessage');
const { get } = require('mongoose');
const storeStockDetails = (req, res, next) => {
  const { id, userId, stockName, stockTicker, quantity, buyPrice, dateOfBuy } =
    req.body;

  try {
    handleMissingParameters(req.body, [
      'userId',
      'stockName',
      'stockTicker',
      'quantity',
      'buyPrice',
      'dateOfBuy'
    ]);
  } catch (error) {
    next(error);
  }
  if (!utils.isValidObjectId(userId)) {
    next(
      new ApiError(
        errorMessages.INVALID_ID.statusCode,
        errorMessages.INVALID_ID.message,
        errorMessages.INVALID_ID.errors
      )
    );
  }
  if (id !== userId) {
    next(
      new ApiError(
        errorMessages.INVALID_ID.statusCode,
        errorMessages.INVALID_ID.message,
        errorMessages.INVALID_ID.errors
      )
    );
  }
  stocks
    .storeStockDetails({
      userId,
      stockName,
      stockTicker,
      quantity,
      buyPrice,
      dateOfBuy
    })
    .then((response) => {
      return res.status(200).json(response);
    })
    .catch((error) => next(error));
};
const getAllStocksByUserId = (req, res, next) => {
  const { id, userId } = req.body;
  handleMissingParameters(req.body, ['userId']);
  if (!utils.isValidObjectId(userId)) {
    next(
      new ApiError(
        errorMessages.INVALID_ID.statusCode,
        errorMessages.INVALID_ID.message,
        errorMessages.INVALID_ID.errors
      )
    );
  }
  if (id !== userId) {
    next(
      new ApiError(
        errorMessages.INVALID_ID.statusCode,
        errorMessages.INVALID_ID.message,
        errorMessages.INVALID_ID.errors
      )
    );
  }
  stocks
    .getAllStocksByUserId(userId)
    .then((response) => {
      return res.status(200).json(response);
    })
    .catch((error) => next(error));
};
const editStockDetails = (req, res, next) => {
  const { stockId } = req.params;
  const { id, userId, quantity } = req.body;
  try {
    handleMissingParameters(req.body, ['userId', 'quantity']);
  } catch (error) {
    next(error);
  }
  if (!utils.isValidObjectId(userId) || !utils.isValidObjectId(stockId)) {
    next(
      new ApiError(
        errorMessages.INVALID_ID.statusCode,
        errorMessages.INVALID_ID.message,
        errorMessages.INVALID_ID.errors
      )
    );
  }
  if (id !== userId) {
    next(
      new ApiError(
        errorMessages.INVALID_ID.statusCode,
        errorMessages.INVALID_ID.message,
        errorMessages.INVALID_ID.errors
      )
    );
  }
  stocks
    .editStockDetails({
      stockId,
      userId,
      quantity
    })
    .then((response) => {
      return res.status(200).json(response);
    })
    .catch((error) => next(error));
};
const deleteStockDetails = (req, res, next) => {
  const { stockId } = req.params;
  const { id, userId } = req.body;
  handleMissingParameters(req.body, ['userId']);
  if (!utils.isValidObjectId(userId) || !utils.isValidObjectId(stockId)) {
    next(
      new ApiError(
        errorMessages.INVALID_ID.statusCode,
        errorMessages.INVALID_ID.message,
        errorMessages.INVALID_ID.errors
      )
    );
  }
  if (id !== userId) {
    next(
      new ApiError(
        errorMessages.INVALID_ID.statusCode,
        errorMessages.INVALID_ID.message,
        errorMessages.INVALID_ID.errors
      )
    );
  }
  stocks
    .deleteStockDetails({ stockId, userId })
    .then((response) => {
      return res.status(200).json(response);
    })
    .catch((error) => next(error));
};
const getRealTimeStockPrice = (req, res, next) => {
  const stockTicker = req.params.stockTicker;
  stocks
    .getRealTimeStockPrice(stockTicker)
    .then((response) => {
      return res.status(200).json(response);
    })
    .catch((error) => next(error));
};
module.exports = {
  storeStockDetails,
  getAllStocksByUserId,
  editStockDetails,
  deleteStockDetails,
  getRealTimeStockPrice
};
