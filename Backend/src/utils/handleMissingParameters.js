const errorMessages = require('../config/errorMessage');
const ApiError = require('./ApiError');
const handleMissingParameters = (payload, requiredFields) => {
  const missingFields = requiredFields.filter((field) => !payload[field]);
  if (missingFields.length > 0) {
    const errorMessage = errorMessages.MISSING_PARAMETERS(
      missingFields.join(',')
    );
    throw new ApiError(
      errorMessage.statusCode,
      errorMessage.message,
      errorMessage.errors
    );
  }
};
module.exports = handleMissingParameters;
