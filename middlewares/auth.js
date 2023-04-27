// what i will do here is that i will reeject the rejequest if there is no any auth token in the header in the request header 

const JWT_SECREAT="djfjcjd$@dfndjfnd"
const jwt=require('jsonwebtoken')


const authMiddleware=(req,res,next)=>{
    try {
    const token=req.header('auth-token')
    if(!token){
        return res.status(401).send({error:"Please autenticate yourself "})
    }
        const data=jwt.verify(token,JWT_SECREAT)
        req.user=data
        next();
    } catch (error) {
        return res.status(401).send({error:"internal server error"})
        
    }

}

module.exports=authMiddleware
