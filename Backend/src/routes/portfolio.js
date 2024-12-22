const express = require('express');
const router = express.Router();
const portfolio = require('../controllers/portfolioControllers');
router.get('/getPortfolioValue', portfolio.getPortfolioValue);
