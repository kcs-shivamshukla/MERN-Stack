const { Router } = require('express');

const { signup, signin, getUsers, setProfilePicture } = require('../controllers/users.controller.js');
const { auth } = require('../middleware/auth.js');


const router = Router();

router.get('/getUsers', auth, getUsers)
router.post('/signup', signup)
router.post('/signin', signin)
router.post('/setprofilepicture/:id', setProfilePicture)

module.exports = router;