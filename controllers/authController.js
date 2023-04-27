const {validationResult} =require('express-validator');
let bcrypt = require('bcryptjs');
let jwt = require('jsonwebtoken');
const JWT_SECREAT="djfjcjd$@dfndjfnd"

const User = require('../models/Ussermodel');
const signupHandler=async(req,res)=>{
  const {name,email,password}=req.body
  const errors = validationResult(req);
//   throwing the validation error 
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  
  //   throwing error if user request with the multiple emails 
  let user = await User.findOne({ email: req.body.email });
  if (user) {
    return res
      .status(400)
      .json({ error: "user with this email already exists" });
  }

//   hasing the password and generating the salt 
const salt=await bcrypt.genSalt(10)  
const secpass=await bcrypt.hash(password,salt)




//   adding user to the database 
const client =await User.create({
    name,email,password
})
// generating the jwt token with id 
const obj={
    id:client._id
}
const token=jwt.sign(obj,JWT_SECREAT)
//  sucess response 
  res.send({token:token})

}
module.exports={
    signupHandler
}