const { Router } = require('express');

const { addChat, getAllChats } = require("../controllers/chats.controller.js")

const router = Router();


router.post('/addchat', addChat);
router.post('/getallchats', getAllChats);

module.exports = router;