const pool = require('../DB.js');
const { createObject, getObjectByPram, deleteObject, updateObject, getObjects } = require("./queryModel.js")

// async function createAlbum(Album) {
//   try {
//     const sql = createObject("Albums", "userId,title", "?,?");
//     const [result] = await pool.execute(sql, [Album.userId,Album.title]);
//     return result[0];
//   } catch (err) {
//     throw err;
//   }
// }

async function getAlbumById(id, start = 0, limit = 2) {
  try {
    console.log("hhhhhhhhhh "+id);
    const sql = getObjectByPram("Albums", "id", limit, start);
    console.log("getAlbumById sql "+sql);
    const [rows, fields] = await pool.query(sql, id);  
      console.log("rrrrrrr "+rows[0]);
    return rows[0];
  } catch (err) {
    console.log(err);
  }
}
async function getAllAlbums() 
  {
    const sql = getObjects("Albums",0,100);
    const [rows, fields] = await pool.query(sql);
    console.log(rows)
    return rows;
}
async function deleteAlbum(valueOfParam,paramToDelete) {
  console.log("paramToDelete "+paramToDelete);
  const queryAlbum =  deleteObject("Albums",paramToDelete);
  const result =  await pool.query(queryAlbum, [valueOfParam]);
  return result;
}
module.exports = {getAlbumById,getAllAlbums,deleteAlbum};