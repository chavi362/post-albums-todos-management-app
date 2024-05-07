const pool = require('../DB.js');
const { createObject, getObjectByPram, deleteObject, updateObject, getObjects } = require("./queryModel.js")

async function createComment(comment) {
  try {
    const sql = createObject("Comments", "postId,name,email,body", "?,?,?,?");
    const [result] = await pool.query(sql, [comment.postId,comment.name,comment.email,comment.body]);
    return result[0];
  } catch (err) {
    throw err;
  }
}
async function getCommentById(id, start = 0, limit = 2) {
  try {
    const sql = getObjectByPram("Comments", "id", limit, start);

    const [rows, fields] = await pool.query(sql, id);  

    return rows[0];
    
  } catch (err) {
    console.log(err);
  }
}
async function getAllComments() 
  {
    const sql = getObjects("Comments",0,100);
    const [rows, fields] = await pool.query(sql);
    return rows;
}
async function updateCommentM(updatedComment, id) {
  const queryComment = updateObject("comments", "name = ?,email = ?, body = ?", "id");
  const result = await pool.query(queryComment, [updatedComment.name,updatedComment.email, updatedComment.body, id]);
  return result;
}
async function deleteComment(valueOfParam,paramToDelete) {
  const queryComments =  deleteObject("Comments",paramToDelete);
  const result =  await pool.query(queryComments, [valueOfParam]);
  return result;
}




module.exports = {updateCommentM,deleteComment, getAllComments,getCommentById,createComment } 









