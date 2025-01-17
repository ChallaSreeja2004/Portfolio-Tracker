class APIResponse {
  constructor(statusCode, data,token, message = 'Success') {
    this.statusCode = statusCode;
    this.data = data;
    this.token = token;
    this.message = message;
  }
}
module.exports = APIResponse;
