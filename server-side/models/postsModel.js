const pool = require('../DB.js');
const { createObject, getObjectByPram, deleteObject, updateObject, getObjects } = require("./queryModel.js")

async function createPost(post) {
  try {
    const sql = createObject("Posts", "userId,title,body", "?,?,?");
    const [result] = await pool.execute(sql, [post.userId,post.title,post.body]);
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




module.exports = {deletePost,updatePostM, getAllPosts,getPostById,createPost } 









