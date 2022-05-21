const mongoose = require('mongoose');
const actions = require('../config/actions');
const { nanoid } = require('nanoid')


const settingSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    appId: {
        type: String,
    },
    secretKey: {
        type: String,
    }
},
    {
        timestamps: true,
    }
);

settingSchema.pre('save', async function (next) {
    const user = this;
     user.appId  = nanoid(10);
     user.secretKey = nanoid(20);
    next();
  });

const AppDetails = mongoose.model('app-detail', settingSchema);

module.exports = AppDetails;