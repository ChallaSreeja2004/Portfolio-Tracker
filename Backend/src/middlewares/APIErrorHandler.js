const ApiError = require('../utils/ApiError');
const errorHandler = (err, req, res, next) => {
  if (err instanceof ApiError) {
    res.status(err.statusCode).json({
      success: false,
      message: err.message,
      data: err.data,
      errors: {
        details: err.errors,
        stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
      }
    });
  } else {
    console.log(err);
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      data: null,
      errors:
        process.env.NODE_ENV === 'development'
          ? [err.message, err.stack]
          : ['Internal Server Error']
    });
  }
};
module.exports = errorHandler;
