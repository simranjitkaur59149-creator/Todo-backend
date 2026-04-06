import mongoose from "mongoose"
import Todo from "../model/todoModel.js"
export const createToDo=async(req,res,next)=>{
    try {
        const todo= await Todo.create(req.body)
        res.status(201).json(todo)
        
    } catch (error) {
        console.log(error)
        res.status(500).json({error:error.message})
        next(error)
    }

}
export const getTodos=async(req,res,next)=>{
    try {
        const todoList=await Todo.find()
        res.status(200).json(todoList)
        
    } catch (error) {
        console.log(error)
        res.status(500).json({error:error.message})
        next();
    }

}
export const updateTodo=async(req,res,next)=>{
    try {
        console.log(req.params)
        const updated=await Todo.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.status(200).json({success:true,updated})
    } catch (error) {
        console.log(error)
        res.json({success:false,error:error.message})
        next()
    }

}
export const deleteTodo=async (req,res)=>{
    try {
        
        await Todo.findByIdAndDelete(req.params.id)
        res.json({success:true,message:"Deleted Successfully"})
    } catch (error) {
         console.log(error)
        res.json({success:false,error:error.message})
      
    }
}