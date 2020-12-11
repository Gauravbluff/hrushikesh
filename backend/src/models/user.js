const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  _userid: mongoose.Schema.Types.ObjectId,
  fullname: {
    type: String,
    required: true,
    trim: true,
    maxlength: 64,
  },
  contact: {
    type: String,
    required: true,
    trim: true,
    validate: {
      validator: function (contactno) {
        return /\d{10}/.test(contactno);
      },
      message: (props) => `${props.value} IS NOT A VALID PHONE NUMBER!`,
    },
  },
  location: {
    country: { type: String, trim: true },
    state: { type: String, trim: true },
    district: { type: String, trim: true },
    block: { type: String, trim: true },
    latitude: { type: String, trim: true },
    longitude: { type: String, trim: true },
    pincode: {
      type: String,
      trim: true,
      validate: {
        validator: function (pincode) {
          return /\d{6}/.test(pincode);
        },
        message: (props) => `${props.value} IS NOT A VALID PINCODE!`,
      },
    },
    full_address: { type: String, trim: true },
  },
});

module.exports = mongoose.model("user", userSchema);
