const errorMessages = {
  INTERNAL_SERVER_ERROR: {
    statusCode: 500,
    message: 'An internal server error occured',
    errors: ['Unexpected error occured.Please try again later']
  },
  INVALID_ID: {
    statusCode: 400,
    message: 'Bad Request: The provided ID is invalid.',
    errors: ['Invalid ID.']
  },
  MISSING_PARAMETERS: (fields) => ({
    statusCode: 400,
    message: `Missing required fields:${fields}`,
    errors: fields
      .spilt(',')
      .map((field) => ({ field, message: `${field} is required.` }))
  }),
  ALREADY_REGISTERED: {
    statusCode: 409,
    message: 'Conflict: User already registered',
    errors: ['User already registered']
  },
  USER_NOT_FOUND: {
    statusCode: 404,
    message: 'Not Found: User not found.',
    errors: ['User not found.']
  },
  INVALID_CREDENTIALS: {
    statusCode: 401,
    message: 'Unauthorized: Invalid credentials.',
    errors: ['Invalid credentials.']
  },
  STOCK_NOT_FOUND: {
    statusCode: 404,
    message: 'Stock not found or does not belong to the user',
    errors: ['The provided stock ID does not match any records for this user']
  },
  STOCK_PRICE_NOT_FOUND: {
    statusCode: 404,
    message: 'Stock price not found.',
    errors: ['Please ensure the stock ticker is correct or try again later.']
  }
};
module.exports = errorMessages;
