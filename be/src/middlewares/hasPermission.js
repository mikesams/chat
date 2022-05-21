const UserService = require("../services/user.service");
const catchAsync = require("../utils/catchAsync");
const config = require('../config/config');
const actions = require('../config/actions');
const ApiError = require('../utils/ApiError');
const httpStatus = require('http-status');

const hasPermission = (value) => async (req, res, next) => {
    console.log(req.token.sub.id, value);
    try {
        if (req.token && req.token.sub.isAdmin) {
            if (req.token.sub.id === config.admin.email) {
                if (actions.adminActions.includes(value)) {
                    next();
                    return;
                }
            }
            throw new ApiError(httpStatus.FORBIDDEN, 'No Access');
        } else {
            const user = await UserService.getUserById(req.token.sub.id);
            next();
        }
    } catch (error) {
        next(error);
    }
};

module.exports = hasPermission;