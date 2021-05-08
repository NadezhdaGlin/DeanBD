const express = require("express")
const apiRouter = require("./apiRoutes");
const mysql = require("mysql2");

  
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "dean_db",
  password: ""
});
 connection.connect(function(err){
    if (err) {
      return console.error("Ошибка: " + err.message);
    }
    else{
      console.log("Подключение к серверу MySQL успешно установлено");
    }
 });


var app = express();
app.use("/", apiRouter);

app.listen(3012, () =>
{
    console.log('API app started');
});
