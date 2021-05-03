const express = require("express")
const apiRouter = require("./apiRoutes");

var app = express();
app.use("/api", apiRouter);

app.get('/', (req, res) => //req - запрос, res - ответ
{
    console.log("Кто-то стучит в api");
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
    res.send("Hello {req} API");
});

app.listen(3012, () =>
{
    console.log('API app started');
});
