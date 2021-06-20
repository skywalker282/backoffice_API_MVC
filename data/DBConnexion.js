const express = require("express");
const mysql = require("mysql");
const PORT = process.env.PORT || 3000;
const app = express();

const db = mysql.createConnection({
  host: "remotemysql.com",
  user: "yuIDJpOrnP",
  password: "5caUWIGqBd",
  database: "yuIDJpOrnP",
  port: 3306,
});
db.connect((error) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log("Database connected ...");
});

module.exports = db;
