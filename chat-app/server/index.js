const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const { Server } = require('socket.io');
const http = require('http');

//Database import
const connectDB = require('./db/db.js')

//Routes import
const userRoutes = require('./routes/users.routes.js')
const chatRoutes = require('./routes/chats.routes.js')

dotenv.config();

//Dotenv Constants
const PORT = process.env.PORT;

const app = express();
const server = http.createServer(app);
const io = new Server(server)

app.use(cors({
    origin: 'http://localhost:3000'
}
));

app.use(express.json());
app.use(express.urlencoded({ extended: true })) //x-www-form

app.use("/chats", chatRoutes);
app.use("/users", userRoutes);


const createServer = () => {
    try {
        connectDB().then(
            server.listen(PORT, () => console.log(`✅ Server listening on port ${PORT}`))
        );
    } catch (error) {
        console.log(error);
    }
}

createServer();


global.usersOnline = new Map();

io.on("connection", (socket) => {
    // socket.on("addUser", (userId) => {
    //     usersOnline.set(userId, socket.id);
    // })
    console.log(`User Connected:${socket.id}`);

    socket.on("sendChat", (data) => {
        const sendSocket = usersOnline.get(data.to);
        if (sendSocket) {
            socket.to(sendSocket).emit("chatRrecieved", data.chat);
        }
    });
})
