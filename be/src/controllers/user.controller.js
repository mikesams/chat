const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { userService } = require('../services');
const { AppDetails, Role, Theme, Member, Guest, Chat } = require('../models');
const mongoose = require('mongoose');

const createSettings = catchAsync(async (req, res) => {
    const hasUser = await AppDetails.findOne({ user: req.token?.sub?.id });
    let user;
    if (hasUser) {
        user = await AppDetails.findOneAndUpdate({ user: req.token?.sub?.id }, { $set: { name: req.body.name } });
    } else {
        user = await AppDetails.create({ user: req.token?.sub?.id, name: req.body.name });
    }
    res.status(httpStatus.OK).json(user);
});

const getSettingsByUser = catchAsync(async (req, res) => {
    const settings = await AppDetails.findOne({ user: req.token?.sub?.id });
    res.status(httpStatus.OK).json(settings);
});

const createRole = catchAsync(async (req, res) => {
    await Role.create({ ...req.body, userId: req.token?.sub?.id });
    res.sendStatus(httpStatus.CREATED)
});

const createGuest = catchAsync(async (req, res) => {
  const guest = await Guest.create({ ...req.body });
    res.status(httpStatus.CREATED).json(guest);
});

const getRoles = catchAsync(async (req, res) => {
    const roles = await Role.find();
    res.status(httpStatus.OK).json(roles);
});

const getRoleById = catchAsync(async (req, res) => {
    const role = await Role.findById(req.params.id);
    res.status(httpStatus.OK).json(role);
});

const markRoleAsDefault = catchAsync(async (req, res) => {
    await Role.updateMany({ isDefault: true }, { $set: { isDefault: false } });
    await Role.updateOne({ _id: req.body.id }, { $set: { isDefault: true } });
    res.sendStatus(httpStatus.OK)
});

const editRole = catchAsync(async (req, res) => {
    await Role.updateOne({ _id: req.body.id }, { $set: req.body });
    res.sendStatus(httpStatus.OK);
});

const getThemes = catchAsync(async (req, res) => {
    const themes = await Theme.find({ userId: req.token?.sub?.id });
    res.status(httpStatus.OK).json(themes);
});

const createTheme = catchAsync(async (req, res) => {
    const theme = await Theme.create({ ...req.body, userId: req.token?.sub?.id });
    res.status(httpStatus.CREATED).json({ id: theme['_id'] })
});

const editTheme = catchAsync(async (req, res) => {
    await Theme.updateOne({ _id: req.body.id, userId: req.token?.sub?.id }, { $set: req.body });
    res.sendStatus(httpStatus.OK);
});

const getThemeById = catchAsync(async (req, res) => {
    const role = await Theme.findById(req.params.id);
    res.status(httpStatus.OK).json(role);
});

const getMembers = catchAsync(async (req, res) => {
    const members = await Member.aggregate([
        {
            $match: {
                companyId: mongoose.Types.ObjectId(req.token?.sub?.id)
            }
        },
        {
            $lookup: {
                from: "roles",
                localField: "role",
                foreignField: "_id",
                as: "role_info",
            },
        },
        {
            $unwind: "$role_info",
        },
        {
            $project: {
                name: '$name',
                role: '$role_info.name',
                createdAt: '$createdAt',
                _id: '$_id'
            }
        }

    ]);
    res.status(httpStatus.OK).json(members);
});

const createMember = catchAsync(async (req, res) => {
    const member = await Member.create({ ...req.body, companyId: req.token?.sub?.id, password: 'user1234' });
    res.status(httpStatus.CREATED).json({ id: member['_id'] })
});

const editMember = catchAsync(async (req, res) => {
    await Member.updateOne({ _id: req.body.id, companyId: req.token?.sub?.id }, { $set: req.body });
    res.sendStatus(httpStatus.OK);
});

const getMemberById = catchAsync(async (req, res) => {
    const role = await Member.findById(req.params.id);
    res.status(httpStatus.OK).json(role);
});

const getConvs = catchAsync(async (req, res) => {
    const ss = await Chat.find({ 'users.id': req.token.sub.id });
    const vvv = await Promise.all(ss?.map(async a => {
        // console.log(a);
        const val = a?.users?.find(w => w.id !== req.token.sub.id);
        console.log(val);
        if (val) {
            const user = await Guest.findById(val?.id);
            console.log(user)
            return {
                ...a?._doc,
                user
            }
        } else {
            return a
        }
    }));
    console.log(vvv)
    res.status(httpStatus.OK).json(vvv);
})

module.exports = {
    createSettings,
    getSettingsByUser,
    createRole,
    getRoles,
    getRoleById,
    markRoleAsDefault,
    editRole,
    getThemes,
    createTheme,
    editTheme,
    getThemeById,
    getMembers,
    createMember,
    editMember,
    getMemberById,
    createGuest,
    getConvs
};