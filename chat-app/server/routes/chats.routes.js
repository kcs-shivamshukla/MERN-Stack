const { Router } = require('express');

const { addChat, getAllChats } = require("../controllers/chats.controller.js")

const router = Router();


router.post('/addchat', addChat);
router.get('/getallchats', getAllChats);

module.exports = router;