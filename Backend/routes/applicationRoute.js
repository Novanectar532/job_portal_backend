const express = require('express');
const router = express.Router();
const upload = require('../middlerware/uploadMiddlerware.js');
const { submitApplication } = require('../controllers/applicationController.js');

// POST: Submit Job Application (with file uploads)
router.post('/apply', upload.fields([
    { name: 'resume', maxCount: 1 },
    { name: 'videoIntro', maxCount: 1 }
]), submitApplication);

module.exports = router;
