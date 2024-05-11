const mysql = require('mysql2');


const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'posts',
  port: 3306,
  password: 'chavi2804',
}).promise();

module.exports = pool;