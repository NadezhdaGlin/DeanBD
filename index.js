const express = require("express")
const apiRouter = require("./apiRoutes");

var app = express();
app.use("/", apiRouter);

app.listen(3012, () =>
{
    console.log('API app started');
});
