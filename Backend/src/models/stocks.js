const mongoose = require('mongoose');
const schema = mongoose.Schema;
const stockSchema = new schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },

  stockName: {
    type: String,
    required: true
  },
  stockTicker: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  buyPrice: {
    type: Number,
    required: true
  },
  dateOfBuy: {
    type: Date,
    required: true,
    default: Date.now
  }
});
module.exports = mongoose.model('Stocks', stockSchema);
