const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  volunteer: {
    type: Boolean,
    required: false,
    isChecked: true
  },
  notvolunteer: {
    type: Boolean,
    required: false,
    isChecked: true
  },
  shopping: {
    type: Boolean,
    required: false,
    isChecked: true
  },
  medicine: {
    type: Boolean,
    required: false,
    isChecked: true
  },
  chat: {
    type: Boolean,
    required: false,
    isChecked: true
  }
});

module.exports = mongoose.model("users", userSchema);
