const mongoose = require('mongoose');

const JobPostSchema = new mongoose.Schema({
    jobTitle: String,
    employmentType: [String],
    // salaryRange: {
    //     min: Number,
    //     max: Number,
    // },
    sallery : Number,
    categories: [String],
    requiredSkills: [String],
    jobDescription: String,
    responsibilities: String,
    skillsAndExperience: String,
    companyLogo: String, // URL of uploaded logo
    companyName: String,
    websiteUrl: String,
    location: String,
    employeeStrength: String,
    industry: String,
    // dateFounded: {
    //     day: Number,
    //     month: Number,
    //     year: Number,
    // },
    day : Number,
    month : Number,
    year : Number,
    technology: String,
    aboutCompany: String,
}, { timestamps: true });

module.exports = mongoose.model('JobPost', JobPostSchema);
