//const txt = document.getElementById("a");
require("dotenv").config();
var mysql = require("mysql");
var connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME || "root",
  password: process.env.DB_PASSWORD,
  database: "cheesepot",
});

// movie 객체에 접근 할 수 있는 api생성?
// 특정 location에 접근 할 수 있는 api생성
connection.query(
  "SELECT * from location where connum=1",
  function (error, results) {
    console.log(error);
    console.log(results);
  }
);
connection.end();
