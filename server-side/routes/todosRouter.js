const express = require("express");
const todoRouter = express.Router();
const {createTodoC,getById,getAllTodos} = require('../controllers/todosController');

todoRouter.get("/:id", (res,req)=>getById(id));
 todoRouter.get("/", getAllTodos);
 todoRouter.post("/", createTodoC);

//todosRouter.delete("/:id", todoController.deleteTodo)
//todosRouter.put("/:id", todoController.updateTodo)
module.exports= todoRouter;