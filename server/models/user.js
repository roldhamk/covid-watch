const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
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
  
  addressl1: {
    type: String,
    required: true,
  },
  addressl2: {
    type: String,
    required: false,
  },
  city: {
    type: String,
    required: true,
  },
  postcode: {
    type: String,
    required: true,
  }
});

UserSchema.statics.findUser = async function(email){
  let user = await this.findOne({email: email});

  return user
}

module.exports = mongoose.model("users", UserSchema);
