const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {
        // await mongoose.connect('mongodb+srv://rahulgangwar22:rukswP4DDbn5fgBH@cluster0.npslo.mongodb.net/Job_Portal?retryWrites=true&w=majority&appName=Cluster0');
        // console.log('MongoDB Connected');
        await mongoose.connect("mongodb+srv://AtulSemwal:atulsemwal@curdexample.zr7crck.mongodb.net/?retryWrites=true&w=majority&appName=CurdExample", {
            dbName: "JOBPortal",
          });
          console.log("✅ Connected to Database successfully!");
        
    } catch (error) {
        console.error('MongoDB Connection Failed:', error);
        process.exit(1);
    }
};

module.exports = connectDB;
