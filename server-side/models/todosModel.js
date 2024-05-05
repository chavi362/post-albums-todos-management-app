const pool = require('../DB.js');
const { createObject, getObjectByPram, deleteObject, updateObject, getObjects } = require("./queryModel.js")

async function createTodoM(todo) {
  try {
    const sql = createObject("Todos", "userId,id,title,completed", "?,?,?,?");
    const [result] = await pool.execute(sql, [todo.userId,todo.id,todo.title]);
    return result[0];
  } catch (err) {
    throw err;
  }
}

async function getTodoById(id, start = 0, limit = 2) {
  try {
    console.log("hhhhhhhhhh "+id);

    const sql = getObjectByPram("Todos", "id", limit, start);
    console.log("jjjjjjjjjjj "+sql);

    const [rows, fields] = await pool.query(sql, id);  
      console.log("rrrrrrr "+rows[0]);

    return rows[0];
    
  } catch (err) {
    console.log(err);
  }
}
async function getAllTodos() 
  {
    const sql = getObjects("Todos",0,100);
    const [rows, fields] = await pool.query(sql);
    console.log(rows)
    return rows;
}
async function deleteTodo(valueOfParam,paramToDelete) {
  console.log("paramToDelete "+paramToDelete);
  const queryTodos =  deleteObject("todos",paramToDelete);
  const result =  await pool.query(queryTodos, [valueOfParam]);
  return result;
}

async function updateTodo(updatedTodo) {
  const queryTodo =updateObject("todos","title = ?, completed = ?","id");
  const result =  await query(queryTodo, [updatedTodo.title, updatedTodo.completed,updatedTodo.id]);
  return result;
}




module.exports = {updateTodo,deleteTodo, getTodoById, createTodoM, getAllTodos } 