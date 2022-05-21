const mongoose = require('mongoose');
const actions = require('../config/actions');

const packageSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    isDefault: {
        type: Boolean,
        default: false
    },
    actions: [{
        type: String,
        enum: actions.userActions,
        required: true
    }]
},
    {
        timestamps: true,
    }
);

const Package = mongoose.model('package', packageSchema);

module.exports = Package;