const model = require('../models/todosModel');

async function createTodoC(req, res) {
    try {
        console.log("req.body ",req.body);
        const newTodo = await model.createTodoM(req.body);
        res.json(newTodo); 
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}


async function updateTodo(req, res) {
    try {
        await model.updateTodoM(req.body,req.params.id);
        res.status(200).json({ status: 200, data: req.params });
    }
    catch (err) {
        throw err;
    }
}
async function getById(req, res) {
    try {
        const todoRes = await model.getTodoById(req.params.id);
        return res.status(200).json(todoRes);
    } catch (err) {
        throw err;
    }

}
async function getAllTodos(req, res) {
    const resultItems = await model.getAllTodos( req.query.userId);
    return res.status(200).json(resultItems);
}

async function deleteTodoById(req, res) {
    try {
        await model.deleteTodo(req.params.id, "id");
        return res.status(200).json({ status: 200, data: req.params.id });
    } catch (err) {
        throw err;
    }
}
module.exports = {deleteTodoById, createTodoC, getById, getAllTodos,updateTodo }