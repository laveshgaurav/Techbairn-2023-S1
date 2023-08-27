const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: String,
  },
  gender: {
    required: true,
    type: String,
  },
  mobile: {
    required: true,
    unique: true,
    type: String,
  },
});

module.exports = mongoose.model("User", userSchema);
