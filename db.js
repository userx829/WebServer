const mongoose = require("mongoose");
require("dotenv").config(); // Load environment variables from .env file

const mongoURI = process.env.MONGO_URI;// Add your database name here
console.log("MongoDB URI:", mongoURI); // Add this line to check the value of mongoURI


async function connectToMongo() {
  try {
    await mongoose.connect(mongoURI);
    console.log("Connected to MongoDB successfully");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
}

module.exports = connectToMongo;
