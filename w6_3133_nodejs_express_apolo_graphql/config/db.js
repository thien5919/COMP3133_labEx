const mongoose = require("mongoose");
require("dotenv").config();

const MONGO_URI = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_CLUSTER}/?${process.env.MONGO_OPTIONS}`;

const connectDB = async () => {
    try {
        mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }).then(success => {
            console.log("Connected to MongoDB");
        }).catch(err => {
            console.log("Error connecting to MongoDB", err);
        });
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
};

module.exports = connectDB;