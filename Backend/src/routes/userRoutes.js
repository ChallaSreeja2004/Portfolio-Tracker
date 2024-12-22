const express=require('express');
const router=express.Router();
const User=require('../controllers/userControllers');
router.post('/register',User.registerUser);
router.post('/login',User.loginUser);
