const express = require("express");
const todoRouter = express.Router();
const {createTodoC,getById,getAllTodos} = require('../controllers/todosController');

todoRouter.get("/:id", (async(req,res)=>{console.log("aaaaaaaaaa "+req.params.id);
    const todo=await getById(req,res)
res.send(todo)}));
 todoRouter.get("/", getAllTodos);
 todoRouter.post("/", createTodoC);


module.exports= todoRouter;

//todosRouter.delete("/:id", todoController.deleteTodo)
//todosRouter.put("/:id", todoController.updateTodo)