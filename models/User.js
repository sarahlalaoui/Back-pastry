const mongoose = require("mongoose");
const { picture } = require("../config/cloudinary");
const userShema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: [6, "Password must be at least 6 characters long"],
  },
  email: {
    type: String,
    required: true,
    match: /^[^\s@]+@[^\s@]+.[^\s@]+$/,
    lowercase: true,
    trim: true,
    unique: true,
  },
  
  
});
module.exports = mongoose.model("User", userShema);
