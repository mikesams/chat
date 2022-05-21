const mongoose = require('mongoose');

const roleSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    timeout: {
        type: Number,
        default: 15
    },
    generalActions: {
        type: Array,
        default: []
    },
    // theme: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     required: true
    // },
    isEmailNotificationsEnabled: {
        type: Boolean,
        default: false
    },
    subject: {
        type: String,
        default: '{{sender.name}} wants to chat with you on {{app.name}}'
    },
    senderName: {
        type: String,
        default: '{{sender.name}} (via {{app.name}})'
    },
    htmlTemplate: {
        type: String,
        default: `
        <div>
    Hi {{recipient.name}}, <br/>
    <br/>
    {{sender.name}} wants to chat with you on {{app.name}}:<br/>
    <br/>
    {{megssages.all}}
    <br/>
    <a href="https://example.com/inbox">Click here to join the chat.</a>
    <br/>
    <br/>
    On behalf of {{sender.name}},<br/>
    The {{app.name}} team.<br/>
    <br/>
</div>
        `
    },
    textTemplate: {
        type: String,
        default: `
        Hi {{recipient.name}},

        {{sender.name}} wants to chat with you on {{app.name}}:
        
        {{messages.all}}
        
        https://example.com/inbox Click here to join the chat.
        
        On behalf of {{sender.name}},
        The {{app.name}} team.
        `
    },
    deleteAction: {
        type: String,
        default: 'None'
    },
    suppressContact: {
        type: String,
        default: ''
    }

},
    {
        timestamps: true,
    }
);

const Role = mongoose.model('role', roleSchema);

module.exports = Role;