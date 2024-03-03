const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  age: {
    type: Number,
  },
}, {timestamps: true});

// create Model

const User = mongoose.model("user", userSchema);

module.exports = User;