const express=require('express')
const {signupHandler,loginHandler}=require('../controllers/authController')
const { body, validationResult } = require('express-validator');


// instances and the variables 
const router=express.Router()
// signin 
router.post('/signin',[
    body('name',"name should be more than 5 digit").isLength({min:5}),
    body('email',"enter the valid email").isEmail(),
    body('password').isLength({min:8})

],signupHandler)




// login
router.post('/login',[
    body('email',"invalid email0").isEmail(),
    body('password','enter atleast 8 charecter').isLength({min:8})
],loginHandler)


module.exports=router

