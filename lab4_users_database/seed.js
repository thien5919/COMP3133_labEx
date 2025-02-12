const connectDB = require("./config/db");
const fs = require("fs");
const User = require("./models/User");
const { default: mongoose } = require("mongoose");

connectDB();

const rawdata = fs.readFileSync("./data/UsersData.json", "utf-8");
const users = JSON.parse(rawdata);

const seedDatabase = async () => {
    try {
        await User.deleteMany();
        console.log("Database cleared");
        await User.insertMany(users);
        console.log("Database seeded successfully");
        
    } catch (error) {
        console.error("Error seeding database:", error);
    } finally {
        mongoose.connection.close();
    }
}

seedDatabase();