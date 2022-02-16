const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  age: {
    type: Number,
    required: false,
  },
  city: {
    type: String,
    required: false,
  },
});

const User = model("User", userSchema, "users");

module.exports = User;
