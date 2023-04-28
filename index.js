const express=require('express')
const connectMongoDb = require('./connect')
const authRoute=require('./routes/auth')
const todosRoute=require('./routes/todos')
const cors=require('cors')
// some instances and variables 
const app=express()
const port=8080
const MONGO_URL='mongodb+srv://rohitkc8848:aBFc4mt1AiItQftU@cluster0.lkxbuza.mongodb.net/todos?retryWrites=true&w=majority'

// connecting to the database 
connectMongoDb(MONGO_URL)




// middlewares 
app.use(express.json())
app.use(cors())


// all routes
app.use('/api/auth',authRoute)
app.use('/api/todos',todosRoute)



// listening to the port 
app.listen(port,()=>{
    console.log(`listening at the port ${port}`);
})