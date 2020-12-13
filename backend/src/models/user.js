const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  fullname: {
    type: String,
    required: [true, "FULLNAME IS REQUIRED!"],
    trim: true,
    maxlength: 64,
  },
  contact: {
    type: String,
    required: [true, "CONTACT IS REQUIRED!"],
    trim: true,
    validate(contactno) {
      if (!/\d{10}/.test(contactno)) {
        throw new Error("INVALID PHONE NUMBER!");
      }
    },
  },
  location: {
    country: { type: String, trim: true },
    state: { type: String, trim: true },
    district: { type: String, trim: true },
    block: { type: String, trim: true },
    latitude: { type: String, trim: true },
    longitude: { type: String, trim: true },
    pincode: { type: String, trim: true },
    full_address: { type: String, trim: true },
  },
});

module.exports = mongoose.model("user", userSchema);
