const pool = require('../DB.js');

async function getUser(id) {
    try {
      const sql = 'SELECT * FROM users where id=?';
      const result = await pool.query(sql, [id]);
      return result[0][0];
    } catch (err) {
      console.log(err);
    }
     async function getUserByEmail(email) {
        try {
          const sql = 'SELECT * FROM users where email=?';
          const result = await pool.query(sql, [email]);
          return result[0][0];
        } catch (err) {
          console.log(err);
        }
  }
  async function createUser(name,userName,email,address,password,phone,company) {
    try {
        const sql = `INSERT INTO users ('name', 'userName','email','address','password','phone','company'), values(${name}, ${userName}, ${email}, ${address}, ${password}, ${phone}, ${company})`;
      ;
  
      const result = await pool.query(sql);
  
      return result[0][0];
  
    } catch (err) {
      throw err;
    }
  }
  module.exports = {getUser,createUser,getUserByEmail} } 