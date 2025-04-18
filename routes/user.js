const express=require('express');
const router=express.Router();
const {handleUserRegister, handleUserLogin}=require('../controllers/user');
router.post('/register',handleUserRegister);
router.post('/login',handleUserLogin);
module.exports=router;