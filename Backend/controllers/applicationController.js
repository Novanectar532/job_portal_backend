const Application = require('../models/Application.js');

exports.submitApplication = async (req, res) => {
    try {
        const { fullName, email, phone, jobTitle, linkedInUrl, portfolioUrl, additionalInfo } = req.body;
        const resume = req.files['resume'] ? req.files['resume'][0].path : null;
        const videoIntro = req.files['videoIntro'] ? req.files['videoIntro'][0].path : null;

        if (!resume) {
            return res.status(400).json({ error: "Resume is required." });
        }

        const newApplication = new Application({
            fullName,
            email,
            phone,
            jobTitle,
            linkedInUrl,
            portfolioUrl,
            additionalInfo,
            resume,
            videoIntro
        });

        await newApplication.save();
        res.status(201).json({ message: 'Application submitted successfully!' });
    } catch (error) {
        res.status(500).json({ error: 'Server Error', details: error.message });
    }
};
