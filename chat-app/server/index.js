const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors')

//Database import
const connectDB = require('./db/db.js')

//Routes import
const userRoutes = require('./routes/users.routes.js')
const chatRoutes = require('./routes/chats.routes.js')

dotenv.config();

//Dotenv Constants
const PORT = process.env.PORT;
const BASE_URL = process.env.BASE_URL;

const app = express();

app.use(cors({
    origin: 'http://localhost:3000'
}
));

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use("/chats", chatRoutes);
app.use("/users", userRoutes);

const server = () => {
    try {
        app.listen(PORT, () => console.log(`✅ Server listening on port: ${BASE_URL}${PORT}`));
    } catch (error) {
        console.log(error);
    }
}
server();
connectDB();
