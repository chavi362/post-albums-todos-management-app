const model = require('../models/todosModel');

async function createTodoC(req,res){
    try{
        const todoRes= model.createTodoM(req.body);
        res.status(200).json({ insertId: todoRes.insertId });
    }catch(err){
        throw err;
    }
    
}

async function getById(req,res){
    try{
       const todoRes= await model.getTodoById(req.params.id);
       return res.status(200).json(todoRes);
    }catch(err){
        throw err;
    }
    
}
async function getAllTodos(req, res) {
        const resultItems = await model.getAllTodos();
        return res.status(200).json(resultItems);
}
   

module.exports = {createTodoC,getById,getAllTodos}