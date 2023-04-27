const mongoose=require('mongoose')

const taskSchema=mongoose.Schema({
    user:{
        type:mongoose.Types.ObjectId,
        ref:"users",
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true,
        unique:true,
    },
    tag:{
        type:String,
        default:"vlogs"
    }

},{timestamps:true})

const Task=mongoose.model('tasks',taskSchema)

module.exports=Task