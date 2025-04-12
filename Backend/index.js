const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db.js');
const applicationRoutes = require('./routes/applicationRoute.js');
const userRoutes = require('./routes/userRoutes.js')
const jobRoutes = require ("./routes/jobRoutes.js")
const profile =require("./routes/profileRoutes.js")
const LoginDetails =require('./routes/LoginDetails.js')
dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads')); // Serve uploaded files
app.use('/api/applications', applicationRoutes);
app.use('/api/user', userRoutes);
app.use('/api', jobRoutes);
app.use('/api/user',profile);
app.use('./api/logindetails',LoginDetails);








const PORT = process.env.PORT || 5000 ;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
