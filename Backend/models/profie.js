const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phoneNumber: { type: String },
  dateOfBirth: { type: Date },
  gender: { type: String, enum: ['Male', 'Female', 'Other'] },
  bio: { type: String },
  profilePhoto: { type: String }, // Store file path or URL
  address: {
    country: { type: String },
    city: { type: String },
    state: { type: String },
    pincode: { type: String },
    addressLine1: { type: String },
    addressLine2: { type: String }
  }
}, { timestamps: true });

module.exports = mongoose.model('Profile', userSchema);