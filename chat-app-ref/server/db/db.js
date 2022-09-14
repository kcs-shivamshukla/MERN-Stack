const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // mongoose.set("debug", true)
        mongoose.connect(process.env.MONGO_URI);
        console.log('✅ MongoDB is connected.')
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectDB;

