const express = require('express');
const router = express.Router();
const portfolio = require('../controllers/portfolioControllers');
router.get('/getPortfolioValue', portfolio.getPortfolioValue);
router.get('/getTopPerformingStock', portfolio.getTopPerformingStock);
router.get('/getPortfolioDistribution', portfolio.getPortfolioDistribution);
module.exports = router;
