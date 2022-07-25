const mongoose = require('mongoose');

const chatSchema = mongoose.Schema(
    {
        chat: {
            type: String,
        },
        sender: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        reciever: Array,
        files: {
            type: String
        }
    },
    {
        timestamps: true
    }
);

const ChatModel = mongoose.model("chat", chatSchema);

module.exports = ChatModel;