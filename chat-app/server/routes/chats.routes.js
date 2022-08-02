const { Router } = require('express');

const { addChat, getAllChats, createGroup, renameGroup, addGroupUser, removeGroupUser, deleteGroup, getAllGroups } = require("../controllers/chats.controller.js");
const { auth } = require('../middleware/auth.js');

const router = Router();


router.post('/addchat', auth, addChat);
router.post('/getallchats', auth, getAllChats);
router.get('/getGroups', auth, getAllGroups)
router.post('/createGroup', auth, createGroup);
router.put('/renameGroup', auth, renameGroup);
router.put('/addGroupUser', auth, addGroupUser);
router.put('/removeGroupUser', auth, removeGroupUser);
router.delete('/deleteGroup', auth, deleteGroup);

module.exports = router;