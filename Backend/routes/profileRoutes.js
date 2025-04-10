const express = require('express');
const router = express.Router();
const User = require('../models/profie');
const upload = require('../middlerware/upload');

// Update user profile
router.post('/profile', upload.single('profilePhoto'), async (req, res) => {
  try {
    const {
      fullName,
      email,
      phoneNumber,
      date,
      gender,
      bio,
      country,
      city,
      state,
      pincode,
      addressLine1,
      addressLine2
    } = req.body;

    const userData = {
      fullName,
      email,
      phoneNumber,
      dateOfBirth: date,
      gender,
      bio,
      profilePhoto: req.file ? req.file.path : undefined,
      address: {
        country,
        city,
        state,
        pincode,
        addressLine1,
        addressLine2
      }
    };

    const user = await User.findOneAndUpdate(
      { email },
      userData,
      { new: true, upsert: true }
    );

    res.status(200).json({ message: 'Profile updated successfully', user });
  } catch (error) {
    res.status(500).json({ message: 'Error updating profile', error: error.message });
  }
});

// Get user profile
router.get('/profile/:email', async (req, res) => {
  try {
    const user = await User.findOne({ email: req.params.email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching profile', error });
  }
});

module.exports = router;