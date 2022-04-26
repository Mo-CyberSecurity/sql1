const express = require("express"),
  app = express(),
  path = require("path"),
  mysql = require('mysql');

const port = process.env.YOUR_PORT || process.env.PORT || 8080;
const flag = "flag{}";

const conn = mysql.createConnection({
  host: "localhost:3306",
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


app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/" + "index.html");
});

app.listen(port, () => {
  console.log(`Start on port:${port}`);
});

app.use(express.static(path.join(__dirname, "public")));
