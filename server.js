const express = require("express"),
  app = express(),
  path = require("path"),
  mysql = require('mysql2');

const port = process.env.YOUR_PORT || process.env.PORT || 8080;
const flag = "flag{}";

const conn = mysql.createConnection({
  host: "77.77.77.74",
  port: "3306",
  user: "user",
  database: "mydb",
  password: "password"
});

conn.connect(function (err) {
  if (err) {
    return console.error("Ошибка: " + err.message);
  }
  else {
    console.log("Подключение к серверу MySQL успешно установлено");
  }
});

let query = "SELECT * FROM Phone WHERE company = 'Apple';";

conn.query(query, (err, result, field) => {
  console.log(err);
  console.log(result);
  console.log(field);
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/" + "index.html");
});

app.listen(port, () => {
  console.log(`Start on port:${port}`);
});

app.use(express.static(path.join(__dirname, "public")));
