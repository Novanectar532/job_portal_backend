const express = require('express');
const router = express.Router();
const upload = require('../middlerware/upload');
const { getUser, createUser, updateUser } = require('../controllers/userController');

// Routes
router.get('/', getUser); // Fetch user data
router.post('/create', upload.single('profilePhoto'), createUser); // Create new user
router.put('/update', upload.single('profilePhoto'), updateUser); // Update user data

module.exports = router;