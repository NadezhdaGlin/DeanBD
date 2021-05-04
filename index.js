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
app.use("/api", apiRouter);

app.get('/', (req, res) => //req - запрос, res - ответ    
{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
    connection.query("SELECT * FROM students LIMIT 5", (err, results, fields) => {
        console.log(err);
//         results.forEach(row => {
//             console.log(row["name"]);
//         });
        res.send(results)
    });
});

app.listen(3012, () =>
{
    console.log('API app started');
});
