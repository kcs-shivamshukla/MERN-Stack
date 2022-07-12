const ChatModel = require('../models/chats.model.js');

const addChat = async (req, res) => {

    try {
        console.log(req.body);
        const { chat, from, to } = req.body;
        const data = await ChatModel.create({
            chat: { message: chat },
            sender: from,
            reciever: to
        });

        if (data) {
            console.log(data);
            return res.json({ message: "Chat sent successfully." })
        }

    } catch (error) {
        console.log(error);
        return res.json({ message: "Chat is not saved to database." })
    }
}

const getAllChats = () => {

}

module.exports = { addChat, getAllChats }