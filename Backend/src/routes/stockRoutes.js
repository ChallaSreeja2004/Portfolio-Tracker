const express = require('express');
const router = express.Router();
const stocks = require('../controllers/stockControllers');
router.post('/storeStockDetails', stocks.storeStockDetails);
router.get('/getAllStocksByUserId', stocks.getAllStocksByUserId);
router.post('/editStockDetails/:stockId', stocks.editStockDetails);
router.delete('/deleteStockDetails/:stockId', stocks.deleteStockDetails);
router.get('/getRealTimeStockPrice/:stockTicker', stocks.getRealTimeStockPrice);
module.exports = router;
