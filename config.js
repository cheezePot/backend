let mysql = require("mysql");
require('dotenv').config();

var dbconn = mysql.createConnection({
    host: 'cheesepot.cynbhblak8px.eu-north-1.rds.amazonaws.com',
    user: "root",
    password: "Alflarhkgkrrh1!",
    database: "cheesepot",
  });

module.exports = dbconn;