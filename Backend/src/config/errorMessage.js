const errorMessages = {
  INTERNAL_SERVER_ERROR: {
    statusCode: 500,
    message: 'An internal server error occured',
    errors: ['Unexpected error occured.Please try again later']
  },
  MISSING_PARAMETERS: (fields) => ({
    statusCode: 400,
    message: `Missing required fields:${fields}`,
    errors: fields
      .spilt(',')
      .map((field) => ({ field, message: `${field} is required.` }))
  }),
  ALREADY_REGISTERED
};
module.exports = errorMessages;
