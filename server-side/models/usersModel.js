const pool = require('../DB.js');
const { createObject, getObjectByPram, deleteObject, updateObject, getObjects } = require("./queryModel.js")
async function createUserM(user) {
  try {
      // Validate required fields
      // if (!name || !userName || !email || !password) {
      //     throw new Error('Required fields missing');
      // }
      const sql = `INSERT INTO Users (name, userName, email, address, password, phone, company) VALUES (?, ?, ?, ?, ?, ?, ?)`;
      const [result] = await pool.execute(sql, [user.name, user.userName, user.email, user.address, user.password, user.phone, user.company]);
      return result;
  } catch (err) {
      console.error(err);
      throw err;
  }
}
async function loginUser(userName, password) {
  try {
    const sql = 'SELECT * FROM Passwords natural join Users WHERE Users.userName = ? AND Passwords.password = ? ';
    console.log("sql!!!! ",userName,password);
    const [rows, fields] = await pool.query(sql, [userName, password]);
    if (rows.length > 0) {
      return rows[0]; 
    } else {
      return null; 
    }
  } catch (err) {
    console.error('Error in loginUser:', err);
    throw err; 
  }
}

async function getAllUsers() 
  {
    const sql = getObjects("users",0,100);
    const [rows, fields] = await pool.query(sql);
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
module.exports = { getAllUsers, createUserM,loginUser } 