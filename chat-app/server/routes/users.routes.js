const { Router } = require('express')

const { signup, signin, getUsers } = require('../controllers/users.controller.js')

const router = Router();

router.get('/getUsers', getUsers)
router.post('/signup', signup)
router.post('/signin', signin)

module.exports = router;