const pool = require('../DB.js');
const { createObject, getObjectByPram, deleteObject, updateObject, getObjects } = require("./queryModel.js")

async function createPost(post) {
  try {
    const sql = createObject("Posts", "userId,id,title,body", "?,?,?,?");
    const [result] = await pool.query(sql, [post.userId,post.id,post.title,post.body]);
    return result[0];
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
async function getAllPosts() 
  {
    const sql = getObjects("Posts",0,100);
    const [rows, fields] = await pool.query(sql);
    console.log(rows)
    return rows;
}
async function deletePost(valueOfParam,paramToDelete) {
  console.log("paramToDelete "+paramToDelete);
  const queryPosts =  deleteObject("posts",paramToDelete);
  const result =  await pool.query(queryPosts, [valueOfParam]);
  return result;
}

//////////update!!!!!!!!!!!!




module.exports = {deletePost, getAllPosts,getPostById,createPost } 









