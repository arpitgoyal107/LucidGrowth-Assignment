const mongoose = require("mongoose");
const { Schema } = mongoose;

// User Schema Model
const userSchema = new Schema({
  name: {
    type: String,
    reuired: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minlength: 5,
  },
  password: {
    type: String,
    required: true,
  },
});

// create a model instance
const User = mongoose.model("User", userSchema);

module.exports = User;
