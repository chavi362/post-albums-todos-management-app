const mysql = require('mysql2');
const config = require('./config/config')


const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'posts',
  port: 3306,
  password: 'mysql24',
}).promise();

module.exports = pool;