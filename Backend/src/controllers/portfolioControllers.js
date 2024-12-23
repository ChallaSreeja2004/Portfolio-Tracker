const { get } = require('mongoose');
const Portfolio = require('../class/portfolio');
const portfolio = new Portfolio();
const utils = require('../class/utils');
const errorMessages = require('../config/errorMessage');
const getPortfolioValue = (req, res, next) => {
  const userId = req.user.userId;
  if (!utils.isValidObjectId(userId)) {
    next(
      new ApiError(
        errorMessages.INVALID_ID.statusCode,
        errorMessages.INVALID_ID.message,
        errorMessages.INVALID_ID.errors
      )
    );
  }
  portfolio
    .getPortfolioValue(userId)
    .then((response) => {
      return res.status(200).json(response);
    })
    .catch((error) => next(error));
};
const getTopPerformingStock = (req, res, next) => {
  const userId = req.user.userId;
  if (!utils.isValidObjectId(userId)) {
    next(
      new ApiError(
        errorMessages.INVALID_ID.statusCode,
        errorMessages.INVALID_ID.message,
        errorMessages.INVALID_ID.errors
      )
    );
  }
  portfolio
    .getTopPerformingStock(userId)
    .the((response) => {
      return res.status(200).json(response);
    })
    .catch((error) => next(error));
};
const getPortfolioDistribution = (req, res, next) => {
  const userId = req.user.userId;
  if (!utils.isValidObjectId(userId)) {
    next(
      new ApiError(
        errorMessages.INVALID_ID.statusCode,
        errorMessages.INVALID_ID.message,
        errorMessages.INVALID_ID.errors
      )
    );
  }
  portfolio
    .getPortfolioDistribution(userId)
    .then((response) => {
      return res.status(200).json(response);
    })
    .catch((error) => next(error));
};
module.exports = {
  getPortfolioValue,
  getTopPerformingStock,
  getPortfolioDistribution
};
