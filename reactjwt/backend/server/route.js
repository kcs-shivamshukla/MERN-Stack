import express from 'express';
import {signUp,signIn,show} from '../controller/signUp.js';
const router = express.Router();



router.post('/api/auth/signup',signUp)
router.post('/api/auth/signin',signIn)
router.get('/show',show)

export default router;
