const pool = require('../DB.js');
const {getObjectsOfUser, createObject, getObjectByPram, deleteObject, updateObject, getObjects } = require("./queryModel.js")

async function createTodoM(todo) {
  try {
    const sql = createObject("Todos", "userId,title,completed", "?,?,?");
    const [result] = await pool.execute(sql, [todo.userId, todo.title, todo.completed]);
    const insertedId = result.insertId; 
    const newTodo = { ...todo, id: insertedId }; 
    return newTodo;
  } catch (err) {
    throw err;
  }
}


async function getTodoById(id, start = 0, limit = 2) {
  try {
    const sql = getObjectByPram("Todos", "id", limit, start);
    const [rows, fields] = await pool.query(sql, id);
    return rows[0];
  } catch (err) {
    console.log(err);
  }
}
async function getAllTodos(id) {
  console.log("id ",id);
  const sql = getObjectsOfUser("Todos", 0, 100);
  const [rows, fields] = await pool.query(sql,[id]);
  return rows;
}
async function deleteTodo(valueOfParam, paramToDelete) {
  const queryTodos = deleteObject("todos", paramToDelete);
  const result = await pool.query(queryTodos, [valueOfParam]);
  return result;
}

async function updateTodoM(updatedTodo, id) {
  const queryTodo = updateObject("todos", "title = ?, completed = ?", "id");
  const result = await pool.query(queryTodo, [updatedTodo.title, updatedTodo.completed, id]);
  return result;
}




module.exports = { updateTodoM, deleteTodo, getTodoById, createTodoM, getAllTodos } 