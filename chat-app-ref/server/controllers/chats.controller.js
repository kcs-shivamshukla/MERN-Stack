const ChatModel = require('../models/chats.model.js');

const addChat = async (req, res) => {

    try {
        const { chat, sender, reciever, files } = req.body;
        const chats = await ChatModel.create({
            chat: chat,
            sender: sender,
            reciever: reciever,
            files: files
        });

        if (chats) {
            // console.log(chats);
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

const deleteChats = async (req, res) => {

    const { sender, reciever } = req.body;

    const conversationUsers = [sender, reciever];

    // const deletedChat = await findByIdAndDelete(conversationUsers, {  })
}

const createGroup = async (req, res) => {

    const { reciever, groupName, sender } = req.body;

    if (!reciever || !groupName) {
        res.status(400).send({ message: "Fill all the fields" }) //Apply in frontend
    }

    const groupUsers = reciever

    if (groupUsers.length < 2) {
        res.status(400).send({ message: "Minimum 2 users required." })  //Apply in frontend
    }
    groupUsers.push(sender);

    try {
        const groupChat = await ChatModel.create({
            groupName: groupName,
            reciever: groupUsers,
            isGroupChat: true,
            groupAdmin: sender,
        });
        res.send(groupChat);
    } catch (error) {
        console.log(error);
    }
}

const getAllGroups = async (req, res) => {
    try {

        const { sender, reciever } = req.body;

        const groups = await ChatModel.find({
            $or: [{ isGroupChat: true }, { sender, reciever }, { sender: reciever, reciever: sender }]
        })
        return res.json(groups)
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Groups Not Found." })
    }
}

const renameGroup = async (req, res) => {
    const { groupId, groupName } = req.body;

    const updatedGroupName = await ChatModel.findByIdAndUpdate(groupId, { groupName }, { new: true });

    if (!updatedGroupName) {
        res.status(400).send({ message: "Chat not Found" })
    }
    else {
        res.json(updatedGroupName)
    }
}

const addGroupUser = async (req, res) => {
    const { groupId, userId } = req.body

    const addedUser = await ChatModel.findByIdAndUpdate(groupId, { $push: { reciever: userId } }, { new: true });

    if (!addedUser) {
        res.status(400).send({ message: "User not added" });
    }
    else {
        res.json(addedUser)
    }
}

const removeGroupUser = async (req, res) => {
    const { groupId, userId } = req.body

    const removeUser = await ChatModel.findByIdAndUpdate(groupId, { $pull: { reciever: userId } }, { new: true });

    if (!removeUser) {
        res.status(400).send({ message: "User not removed" });
    }
    else {
        res.json(removeUser)
    }
}

const deleteGroup = async (req, res) => {


    const groupId = req.params.id;

    const removeGroup = await ChatModel.findByIdAndDelete(groupId);

    if (!removeGroup) {
        res.status(400).send({ message: "Group not removed" });
    }
    else {
        res.status(200).send({ message: "Group deleted" });
    }
}

module.exports = { addChat, getAllChats, deleteChats, createGroup, getAllGroups, renameGroup, addGroupUser, removeGroupUser, deleteGroup }