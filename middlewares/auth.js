// what i will do here is that i will reeject the rejequest if there is no any auth token in the heade in the request header 

const JWT_SECREAT="djfjcjd$@dfndjfnd"
const jwt=require('jsonwebtoken')

const authMiddleware=(req,res,next)=>{
    try {
    const token=res.header('auth-token')

    if(!token){
       return  res.status(401).send({ status:false,error:"please authenticate yourself"})
    }
    const data=jwt.verify(token,JWT_SECREAT)
    req.user=data.user
    next()
} catch (error) {
    return res.status(401).send({status:false,error:"please authenticate your self"})
        
}

}

module.exports=authMiddleware
