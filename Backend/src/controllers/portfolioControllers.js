const { get } = require('mongoose');
const Portfolio = require('../class/portfolio');
const portfolio = new Portfolio();
const Utils = require('../class/utils');
const utils = new Utils();
const errorMessages = require('../config/errorMessage');
const handleMissingParameters = require('../utils/handleMissingParameters');
const getPortfolioValue = (req, res, next) => {
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
  portfolio
    .getPortfolioValue(userId)
    .then((response) => {
      return res.status(200).json(response);
    })
    .catch((error) => next(error));
};
const getTopPerformingStock = (req, res, next) => {
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
  portfolio
    .getTopPerformingStock(userId)
    .then((response) => {
      return res.status(200).json(response);
    })
    .catch((error) => next(error));
};
const getPortfolioDistribution = (req, res, next) => {
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
