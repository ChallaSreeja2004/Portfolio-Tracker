const User = require('../class/user');
const handleMissingParameters = require('../utils/handleMissingParameters');
const ApiError = require('../utils/ApiError');
const user = new User();

const registerUser = (req, res, next) => {
  const { name, email, password } = req.body;
  try {
    handleMissingParameters(req.body, ['name', 'email', 'password']);
  } catch (error) {
    next(error);
  }
  user
    .registerUser({ name, email, password })
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((error) => {
      next(error);
    });
};

const loginUser = (req, res, next) => {
  const { email, password } = req.body;
  try {
    handleMissingParameters(req.body, ['email', 'password']);
  } catch (error) {
    next(error);
  }
  user
    .loginUser({ email, password })
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((error) => {
      next(error);
    });
};

module.exports = { registerUser, loginUser };
