const mongoose = require('mongoose');

const chatSchema = mongoose.Schema(
    {
        chat: {
            type: String,
        },
        groupName: {
            type: String
        },
        isGroupChat: {
            type: Boolean,
            default: false
        },
        groupAdmin: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        sender: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        reciever: {
            type: Array,
            ref: "User"
        },
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