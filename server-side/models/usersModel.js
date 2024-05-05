const pool = require('../DB.js');
const { createObject, getObjectByPram, deleteObject, updateObject, getObjects } = require("./queryModel.js")

async function createUserM(user) {
  try {
    console.log("user: "+user);

    const sql = createObject("Users", "name, userName, email,address,password, phone,company", "?,?,?,?,?,?,?");
    const [result] = await pool.execute(sql, [user.name, user.username, user.email,user.address,user.password, user.phone, user.company]);
    return result[0];
  } catch (err) {
    throw err;
  }
}

async function getUserByEmail(email, start = 0, limit = 2) {
  try {
    const sql = getObjectByPram("Users", "email", limit, start);
    console.log("sqlll in getUserByEmail "+sql+" "+email);

    const [rows, fields] = await pool.query(sql, [email]);
    return rows[0];
  } catch (err) {
    console.log(err);
  }
}
async function getAllUsers() 
  {
    const sql = getObjects("users",0,100);
    console.log("model");
    const [rows, fields] = await pool.query(sql);
    console.log(rows)
    return rows;
}


// async function getUser(id) {
//     try {
//       const sql = 'SELECT * FROM users where id=?';
//       const result = await pool.query(sql, [id]);
//       return result[0][0];
//     } catch (err) {
//       console.log(err);
//     }
module.exports = { getAllUsers, createUserM, getUserByEmail } 