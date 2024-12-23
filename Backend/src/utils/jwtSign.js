const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');
const privateKey = fs.readFileSync(
  path.join(__dirname, '../../private_key.pem'),
  'utf8'
);
const signInOptions = {
  algorithm: 'ES256',
  expiresIn: '1d',
  issuer: 'ProfileTracker'
};
const jwtSign = (payload) => {
  return jwt.sign(payload, privateKey, signInOptions);
};
module.exports = jwtSign;
