const express = require("express"),
  app = express(),
  path = require("path"),
  mysql = require('mysql2');

const port = process.env.YOUR_PORT || process.env.PORT || 33341;

// const conn = mysql.createConnection({
//   host: "77.77.77.74",
//   port: "3306",
//   user: "user",
//   database: "mydb",
//   password: "password"
// });

const conn = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  database: "mydb",
  password: "Y9b0@#^6IP_0952?FM?iK%%lL1JyZOYE"
});

app.get("/api/*", (req, res) => {
  let query = `SELECT * FROM Phone WHERE company = '${req.query.company
    }';`;

  conn.query(query, (err, result, field) => {
    console.log(err);
    console.log(result);
    err !== null ?
      res.send({ status: 404, data: err }) :
      res.send({ status: 200, data: result })
  });
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/" + "index.html");
});

conn.connect(function (err) {
  if (err) {
    return console.error("Ошибка: " + err.message);
  }
  else {
    console.log("Подключение к серверу MySQL успешно установлено");
  }
});

app.listen(port, () => {
  console.log(`Start on port:${port}`);
});

app.use(express.static(path.join(__dirname, "public")));
