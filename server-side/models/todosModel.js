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

async function getTodoById(email, start = 0, limit = 2) {
  try {
    const sql = getObjectByPram("Todos", "id", limit, start);
    const [rows, fields] = await pool.query(sql, [id]);
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


module.exports = { getTodoById, createTodoM, getAllTodos } 