const mysql = require("mysql2");
const pool = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: "api",
  database: "jobber_auth",
  port: "3306",
  multipleStatements: true, //allows multiple mysql queries to be executed at a time
});

module.exports = pool;
