const express=require('express')
const connectMongoDb = require('./connect')
const authRoute=require('./routes/auth')
const todosRoute=require('./routes/todos')

// some instances and variables 
const app=express()
const port=8080
const MONGO_URL='mongodb://127.0.0.1:27017/todos'

// connecting to the database 
connectMongoDb(MONGO_URL)




// middlewares 
app.use(express.json())


// all routes
app.use('/api/auth',authRoute)
app.use('/api/todos',todosRoute)



// listening to the port 
app.listen(port,()=>{
    console.log(`listening at the port ${port}`);
})