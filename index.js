const express=require('express')
const connectMongoDb = require('./connect')
const authRoute=require('./routes/auth')

// some instances and variables 
const app=express()
const port=8080
const MONGO_URL='mongodb://127.0.0.1:27017/todos'

// connecting to the database 
connectMongoDb(MONGO_URL)




// middlewares 
app.use(express.json())



app.use('/api/auth',authRoute)
app.listen(port,()=>{
    console.log(`listening at the port ${port}`);
})