const pool = require('../DB.js');
const { createObject, getObjectByPram, deleteObject, updateObject, getObjects } = require("./queryModel.js")

async function createPost(post) {
  try {
    const sql = createObject("Posts", "userId,title,body", "?,?,?");
    const [result] = await pool.execute(sql, [post.userId,post.title,post.body]);
    const insertedId = result.insertId; 
    console.log(insertedId+"555555555")
    return insertedId;
  } catch (err) {
    throw err;
  }
}
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

async function getPostById(id, start = 0, limit = 2) {
  try {

    const sql = getObjectByPram("Posts", "id", limit, start);

    const [rows, fields] = await pool.query(sql, id);  

    return rows[0];
    
  } catch (err) {
    console.log(err);
  }
}
async function getAllPosts(page, perPage) 
  {
    const sql = getObjects("Posts",page, perPage);
    console.log('Generated SQL Query:', sql);
    const [rows, fields] = await pool.query(sql);
    console.log("posts modal" +rows[0].id)
    return rows;
}
async function getUserPosts(userId) 
  {
    const sql = getObjectByPram("Posts","userId",0,100);
    const [rows, fields] = await pool.query(sql,[userId]);
    return rows;
}
async function deletePost(valueOfParam,paramToDelete) {
  const queryPosts =  deleteObject("posts",paramToDelete);
  const result =  await pool.query(queryPosts, [valueOfParam]);
  return result;
}

async function updatePostM(updatedPost, id) {
  const queryPost = updateObject("posts", "title = ?, body = ?", "id");
  const result = await pool.query(queryPost, [updatedPost.title, updatedPost.body, id]);
  return result;
}
async function updatePostBody(updatedPost, id) {
  const queryPost = updateObject("posts", " body = ?", "id");
  const result = await pool.query(queryPost, [updatedPost.body, id]);
  return result;
}
module.exports = {getUserPosts,deletePost,updatePostM, getAllPosts,getPostById,createPost,updatePostBody } 









