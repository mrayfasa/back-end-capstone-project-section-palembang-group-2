// MySql Database Connection
const mysql = require("mysql");
const pool = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: "",
  database: "revoucapstone",
});

module.exports = pool;
