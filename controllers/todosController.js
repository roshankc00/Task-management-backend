const Task = require("../models/Tasksmodel");
const {validationResult}=require('express-validator')
// add the todos
const addtodosHandler = async (req, res) => {
  try {
    const { validationResult } = require("express-validator");
    const { title, description, tag } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    
    console.log("done");
    const todos = await Task.create({
      user: req.user.id,
      title,
      description,
      tag,
    });

    console.log("done 2 ");
    res.send({ sucess: true, response: "sucessfully added to the database" });
  } catch (error) {
    return res.status(401).send({ error: "internal server error" });
  }
};









// get all the todos of that user

const getAllTodosHandler =async (req,res) => {
    try{
    const todos=await Task.find({user:req.user.id})
    res.json({todos})
} catch (error) {
    return res.status(401).send({sucess:false, error: "internal server error" });
  }
};



// update the todos 
const updatetodos=async (req,res)=>{
    const {title,description,tag}=req.body
    // throwing error for the validation error 
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const task=await Task.findById(req.params.id)
    if(!task){
        res.status(401).json({error:"todos doesnt exist"})
    }
    if(task.user.toString()!==req.user.id){
        return res.status(401).send("not alllowed")
    }
    const newTask={}
    if(title){
        newTask.title=title
    }
    if(description){
        newTask.description=description
    }
    if(tag){
        newTask.tag=tag
    }
  const updatedtask=await Task.findByIdAndUpdate(req.params.id,{$set:newTask},{new:true})

    
res.json({sucess:true,response:"done updates sucessfully"})

}




// delete the deletehandler 
const delettodosHandler=async(req,res)=>{
    console.log(req.params.id);
    const task=await Task.findById(req.params.id)
    console.log(task);
    if(!task){
       return  res.json({sucess:false, error:"no notes available"})
    }
    if(task.user.toString()!==req.user.id){
        return res.status(401).send("not alllowed")
    }
   await Task.findByIdAndDelete(req.params.id)
    res.json({sucess:true,response:"deleted sucessfully"})

}
   





module.exports = {
  addtodosHandler,
  getAllTodosHandler,
  delettodosHandler,
  updatetodos
};
