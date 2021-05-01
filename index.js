const express = require("express")
const apiRouter = require("./apiRoutes");

var app = express();
app.use("/api", apiRouter);

app.get('/', function(req, res)//req - запрос, res - ответ
{
    res.send("Hello {req} API");
});

app.listen(3012, function() 
{
    console.log('API app started');
});
