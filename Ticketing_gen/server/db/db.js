const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

const connectDB = async () => {
  try {
    mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB is connected!");
  } catch (error) {
    console.log(error);
  }
}

module.exports = connectDB;