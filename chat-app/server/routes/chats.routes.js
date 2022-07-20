const { Router } = require('express');

const { addChat, getAllChats } = require("../controllers/chats.controller.js");
const { auth } = require('../middleware/auth.js');

const router = Router();


router.post('/addchat', auth, addChat);
router.post('/getallchats', auth, getAllChats);

module.exports = router;