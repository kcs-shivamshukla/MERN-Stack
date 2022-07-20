const mongoose = require('mongoose');

const chatSchema = mongoose.Schema(
    {
        chat: {
            type: String,
            required: true
        },
        sender: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        reciever: Array
    },
    {
        timestamps: true
    }
);

const ChatModel = mongoose.model("chat", chatSchema);

module.exports = ChatModel;