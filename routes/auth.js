const express=require('express')
const {signupHandler}=require('../controllers/authController')
const { body, validationResult } = require('express-validator');


// instances and the variables 
const router=express.Router()

router.post('/signin',[
    body('name',"name should be more than 5 digit").isLength({min:5}),
    body('email',"enter the valid email").isEmail(),
    body('password').isLength({min:8})

],signupHandler)


module.exports=router