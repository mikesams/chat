const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { authService, tokenService, userService } = require('../services');
const config = require('../config/config');
const configActions = require('../config/actions');
const Package = require('../models/package.model');

const register = catchAsync(async (req, res) => {
  const package = await Package.findOne({ isDefault: true });
  const user = await userService.createUser({ ...req.body, package: package._id });
  const tokens = await tokenService.generateAuthTokens({ id: user._id, isAdmin: false });
  res.status(httpStatus.CREATED).send({ tokens, actions: package?.actions });
});

const login = catchAsync(async (req, res) => {
  const { email, password } = req.body;
  let tokens = '';
  let actions = [];
  let id = '';
  if (email === config.admin.email && password === config.admin.password) {
    tokens = await tokenService.generateAuthTokens({ id: config.admin.email, isAdmin: true });
    actions = configActions.adminActions;
  } else {
    const user = await authService.loginUserWithEmailAndPassword(email, password);
    console.log(user);
    actions = user?.actions || [];
    tokens = await tokenService.generateAuthTokens({ id: user._id, isAdmin: false });
    id = user?._id;
  }
  res.send({ tokens, actions, id });
});

module.exports = {
  register,
  login
};