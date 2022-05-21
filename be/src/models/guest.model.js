const mongoose = require('mongoose');
const validator = require('validator');

const guestSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true},
        email: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
            validate(value) {
              if (!validator.isEmail(value)) {
                throw new Error('Invalid email');
              }
            },
          },
  
});

const Guest = mongoose.model("guest", guestSchema);
module.exports = Guest;