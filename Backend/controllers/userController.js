const User = require('../models/User');

// Get user data
exports.getUser = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.query.email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Create a new user
exports.createUser = async (req, res) => {
  try {
    const {
      fullName, email, phoneNumber, dateOfBirth, gender, about,
      country, city, state, pinCode, addressLine1, addressLine2,
    } = req.body;

    const newUser = new User({
      fullName,
      email,
      phoneNumber,
      dateOfBirth,
      gender,
      about,
      country,
      city,
      state,
      pinCode,
      addressLine1,
      addressLine2,
      profilePhoto: req.file ? req.file.path : '',
    });

    await newUser.save();
    res.status(201).json({ message: 'User created successfully', user: newUser });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Update user data
exports.updateUser = async (req, res) => {
  try {
    const {
      fullName, email, phoneNumber, dateOfBirth, gender, about,
      country, city, state, pinCode, addressLine1, addressLine2,
    } = req.body;

    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    user.fullName = fullName || user.fullName;
    user.phoneNumber = phoneNumber || user.phoneNumber;
    user.dateOfBirth = dateOfBirth || user.dateOfBirth;
    user.gender = gender || user.gender;
    user.about = about || user.about;
    user.country = country || user.country;
    user.city = city || user.city;
    user.state = state || user.state;
    user.pinCode = pinCode || user.pinCode;
    user.addressLine1 = addressLine1 || user.addressLine1;
    user.addressLine2 = addressLine2 || user.addressLine2;
    user.profilePhoto = req.file ? req.file.path : user.profilePhoto;

    await user.save();
    res.status(200).json({ message: 'User updated successfully', user });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};