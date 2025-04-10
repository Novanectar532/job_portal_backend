const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    jobTitle: { type: String, required: true },
    linkedInUrl: { type: String, required: true },
    portfolioUrl: { type: String, required: true },
    additionalInfo: { type: String },
    resume: { type: String, required: true },
    videoIntro: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Application', applicationSchema);
