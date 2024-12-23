const mongoose = require('mongoose');
const userModel = require('../models/user');
const bcrypt = require('bcrypt');
const ApiError = require('../utils/ApiError');
const errorMessages = require('../config/errorMessage');
const APIResponse = require('../utils/APIResponse');
const jwtSign = require('../utils/jwtSign');
class User {
  async checkIfUserExist(payload) {
    const { email } = payload;
    try {
      const existingUser = await userModel.findOne({ email });
      if (existingUser) {
        const error = errorMessages.ALREADY_REGISTERED('User');
        throw new ApiError(error.statusCode, error.message.error.errors);
      }
    } catch (error) {
      console.log(error);
      throw new ApiError(
        errorMessages.INTERNAL_SERVER_ERROR.statusCode,
        errorMessages.INTERNAL_SERVER_ERROR.message,
        errorMessages.INTERNAL_SERVER_ERROR.errors
      );
    }
  }

  async registerUser(payload) {
    const { name, email, password } = payload;
    const salt = bcrypt.genSaltSync(10);
    try {
      await this.checkIfUserExist(email);
      const hashedPassword = await bcrypt.hash(password, salt);
      const newUser = new userModel({
        name,
        email,
        password: hashedPassword
      });
      const user = await newUser.save();
      const result = await userModel.findById(user._id, '-password');
      const jwtPayload = {
        userId: newUser._id,
        name,
        email
      };
      const token = jwtSign(jwtPayload);
      return new APIResponse(201, result, token);
    } catch (error) {
      console.log(error);
      throw new ApiError(
        errorMessages.INTERNAL_SERVER_ERROR.statusCode,
        errorMessages.INTERNAL_SERVER_ERROR.message,
        errorMessages.INTERNAL_SERVER_ERROR.errors
      );
    }
  }

  async loginUser(payload) {
    const { email, password } = payload;
    try {
      const user = await userModel.findOne({ email });
      if (!user) {
        throw new ApiError(
          errorMessages.USER_NOT_FOUND.statusCode,
          errorMessages.USER_NOT_FOUND.message,
          errorMessages.USER_NOT_FOUND.errors
        );
      }
      const isPasswordMatched = await bcrypt.compare(password, user.password);
      if (!isPasswordMatched) {
        throw new ApiError(
          errorMessages.INVALID_CREDENTIALS.statusCode,
          errorMessages.INVALID_CREDENTIALS.message,
          errorMessages.INVALID_CREDENTIALS.errors
        );
      }
      const jwtPayload = {
        userId: user._id,
        name: user.name,
        email: user.email
      };
      const token = jwtSign(jwtPayload);
      return new APIResponse(200, user, token);
    } catch (error) {
      console.log(error);
      throw new ApiError(
        errorMessages.INTERNAL_SERVER_ERROR.statusCode,
        errorMessages.INTERNAL_SERVER_ERROR.message,
        errorMessages.INTERNAL_SERVER_ERROR.errors
      );
    }
  }
}
module.exports = User;
