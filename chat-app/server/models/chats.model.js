const mongoose = require('mongoose');

const chatSchema = mongoose.Schema(
    {
        chat: {
            message: {
                type: String,
                required: true
            }
        },
        sender: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        reciever: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    },
    {
        timestamps: true
    }
);

const ChatModel = mongoose.model("chat", chatSchema);

module.exports = ChatModel;