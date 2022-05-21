const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
    users: [
        {
            id: mongoose.Schema.Types.ObjectId,
            isCorporate: false
        },
    ],
    messages: [
        {
            from: mongoose.Schema.Types.ObjectId,
            to:  mongoose.Schema.Types.ObjectId,
            message: String,
            date: { type: Date, default: Date.now }
        },
    ]
},  {
    timestamps: true,
});

const Chat = mongoose.model("chat", chatSchema);
module.exports = Chat;