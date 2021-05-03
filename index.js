const express = require("express")
const apiRouter = require("./apiRoutes");

var app = express();
app.use("/api", apiRouter);

app.get('/', (req, res) => //req - запрос, res - ответ
{
    console.log("Кто-то стучит в api");
    res.send("Hello {req} API");
});

app.listen(3012, () =>
{
    console.log('API app started');
});
