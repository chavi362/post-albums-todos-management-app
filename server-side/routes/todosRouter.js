const express = require("express");
const todoRouter = express.Router();
const {deleteTodoById,createTodo,getById,getAllTodos,updateTodo} = require('../controllers/todosController');

todoRouter.get("/:id", (async(req,res)=>{console.log("aaaaaaaaaa "+req.params.id);
  await getById(req,res)
}));
 todoRouter.get("/", getAllTodos);

 todoRouter.post("/", (async(req,res)=>
  {
    await createTodo(req,res);}
    
  ));

 todoRouter.delete("/:id",(async(req,res)=>{
 await deleteTodoById(req,res)
}));
 todoRouter.put("/:id",(async(req,res)=>{
 await updateTodo(req,res)
}));
module.exports= todoRouter;

//todosRouter.delete("/:id", todoController.deleteTodo)
//todosRouter.put("/:id", todoController.updateTodo)