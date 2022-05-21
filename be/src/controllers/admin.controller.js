const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { authService, tokenService, userService } = require('../services');
const actions = require('../config/actions');
const Package = require('../models/package.model');

const getUsers = catchAsync(async (req, res) => {
    const users = await userService.queryUsers();
    res.status(httpStatus.OK).json(users);
});

const getUserActions = catchAsync(async (req, res) => {
    res.status(httpStatus.OK).json(actions.userActions);
});

const createPackage = catchAsync(async (req, res) => {
    await Package.create(req.body);
    res.sendStatus(httpStatus.CREATED)
});

const getPackages = catchAsync(async (req, res) => {
    const packages = await Package.find();
    res.status(httpStatus.OK).json(packages);
});

const getPackageById = catchAsync(async (req, res) => {
    const package = await Package.findById(req.params.id);
    res.status(httpStatus.OK).json(package);
});

const markPackageAsDefault = catchAsync(async (req, res) => {
    await Package.updateMany({ isDefault: true }, { $set: { isDefault: false } });
    await Package.updateOne({ _id: req.body.id }, { $set: { isDefault: true } });
    res.sendStatus(httpStatus.OK)
});

const editPackage = catchAsync(async (req, res) => {
    await Package.updateOne({ _id: req.body.id }, { $set: req.body });
    res.sendStatus(httpStatus.OK);
});

module.exports = {
    getUsers,
    getUserActions,
    createPackage,
    getPackages,
    getPackageById,
    editPackage,
    markPackageAsDefault
};