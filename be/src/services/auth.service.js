const httpStatus = require('http-status');
const userService = require('./user.service');
const ApiError = require('../utils/ApiError');
const { User } = require('../models');

const loginUserWithEmailAndPassword = async (email, password) => {
    let type = 'user';
    let checkUser = await userService.getUserByEmail(email);
    if (!checkUser) {
        checkUser = await userService.getMemberByEmail(email);
        type = 'member';
    }
    console.log(checkUser, password)
    if (!checkUser || !(await checkUser.isPasswordMatch(password))) {
        throw new ApiError(httpStatus.BAD_REQUEST, 'Incorrect email or password');
    }
    if(type === 'user') {
        const user = await User.aggregate([
            {
                $match: { email }
            },
            {
                $lookup: {
                    from: "packages",
                    localField: "package",
                    foreignField: "_id",
                    as: "package_info",
                },
            },
            {
                $unwind: "$package_info",
            },
            {
                $project: {
                    name: '$name',
                    actions: '$package_info.actions',
                    createdAt: '$createdAt',
                    _id: '$_id'
                }
            }
        ]);
        console.log(password)
        if (user && user.length) {
            return user[0];
        }
    }else {
      return {_id: checkUser['_id'], name: checkUser['name'], actions:['Chat Accessible']};
    }
    throw new ApiError(httpStatus.BAD_REQUEST, 'Incorrect email or password');
};

module.exports = {
    loginUserWithEmailAndPassword
};