const ChatModel = require('../models/chats.model.js');

const addChat = async (req, res) => {

    try {
        console.log(req.body);
        const { chat, sender, reciever } = req.body;
        const chats = await ChatModel.create({
            chat: chat,
            sender: sender,
            reciever: reciever,
        });

        if (chats) {
            console.log(chats);
            return res.json({ message: "Chat sent successfully." })
        }

    } catch (error) {
        console.log(error);
        return res.json({ message: "Chat is not saved to database." })
    }
}

const getAllChats = async (req, res) => {
    try {
        const { sender, reciever } = req.body;

        // const chatQuery = {}

        // chatQuery['$or'] = [
        //     { sender, reciever },
        //     { sender: reciever, reciever: sender }
        // ]


        const chats = await ChatModel.find({
            $or: [{ sender, reciever }, { sender: reciever, reciever: sender }]
        }).sort({ createdAt: 1 }).lean();

        return res.json(chats);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Chats not found." })
    }
}

module.exports = { addChat, getAllChats }