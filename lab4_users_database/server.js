const express = require("express");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes"); 
require("dotenv").config();

connectDB();

const app = express();
app.use(express.json());


app.use("/users", userRoutes);

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
