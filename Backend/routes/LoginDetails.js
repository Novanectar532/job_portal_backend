const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Update login credentials (POST /api/user/update-credentials)
router.post('/update-credentials', async (req, res) => {
  const { email, username, phone, password } = req.body;

  // Basic validation
  if (!email || !username || !phone || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    // Check if user exists
    let user = await User.findOne({ email });
    if (!user) {
      // Create new user if not found
      user = new User({ email, username, phone, password });
    } else {
      // Update existing user
      user.username = username;
      user.phone = phone;
      user.password = password; // Password will be hashed by pre-save hook
    }

    await user.save();
    res.status(200).json({ message: 'Credentials updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error updating credentials', error: error.message });
  }
});

// Update password (POST /api/user/update-password)
router.post('/update-password', async (req, res) => {
  const { email, oldPassword, newPassword } = req.body;

  // Basic validation
  if (!email || !oldPassword || !newPassword) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Verify old password
    const isMatch = await user.comparePassword(oldPassword);
    if (!isMatch) {
      return res.status(400).json({ message: 'Old password is incorrect' });
    }

    // Update password
    user.password = newPassword;
    await user.save();

    res.status(200).json({ message: 'Password updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error updating password', error: error.message });
  }
});

module.exports = router;