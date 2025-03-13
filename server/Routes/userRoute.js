import express from 'express';
import { Login, Logout, Profile, Register } from '../Controllers/userController.js';


const router = express.Router();

router.post('/register', Register)
router.post('/login', Login)
router.get('/profile', Profile)
router.post('/logout', Logout)


export default router;