class ApiError extends Error {
  constructor(
    statusCode,
    message = 'Something went wrong',
    errors = [],
    stack = ''
  ) {
    super(message);
    this.statusCode = statusCode;
    this.data=null;
    this.errors = errors;   
    this.stack = stack;
    if(!stack)
    {
        Error.captureStackTrace(this, this.constructor);
    }
  }
}
module.exports=ApiError;
