const express=require('express')
const {body,validationResult}= require('express-validator')
const { addtodosHandler,getAllTodosHandler,delettodosHandler,updatetodos } =require('../controllers/todosController')
const authMiddleware =require('../middlewares/auth')
const router=express.Router()

// addtodos 
router.post('/addtodos',authMiddleware,[
    body('title',"enter the valid title").isLength({min:5}),
    body('description',"enter the valid description").isLength({min:5}),
    body('tag',"enter the valid tag").isLength({min:3})

],addtodosHandler)

// getalltodos
router.get('/getalltodos',authMiddleware,getAllTodosHandler)

// delete the todos 
router.delete('/deletetodos/:id',authMiddleware,delettodosHandler)


// uodate the todos 
router.put('/updatetodos/:id',authMiddleware,[
    body('title',"enter the valid title").isLength({min:5}),
    body('description',"enter the valid description").isLength({min:5}),
    body('tag',"enter the valid tag").isLength({min:3})


],updatetodos)

module.exports=router 