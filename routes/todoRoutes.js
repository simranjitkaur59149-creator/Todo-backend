import express from "express"
import { createToDo, deleteTodo, getTodos, updateTodo } from "../controllers/todoController.js"
const routes=express.Router()
routes.post("/create",createToDo)
routes.get("/display",getTodos)
routes.put("/:id",updateTodo)
routes.delete("/:id",deleteTodo)
export default routes;