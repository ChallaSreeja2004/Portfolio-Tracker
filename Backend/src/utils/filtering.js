const maskSensitiveData = (body) => {
  if (!body) return body;
  const maskedBody = { ...body };
  if (maskedBody.password) maskedBody.password = '***';
  return maskedBody;
};
const filterHeaders = (headers) => {
  const { 'content-type': contentType, 'user-agent': userAgent } = headers;
  return { contentType, userAgent };
};
module.exports = { maskSensitiveData, filterHeaders };
