var express = require('express');

var app = express(); //сервер

app.get('/', function(req, res)//req - запрос, res - ответ
{
        res.send('Hello API');
})


var artist = [
    {
      id: 1, 
        name: 'Ariana Grande'
    },
    
    {
        id: 2,
        name: 'Taylor Swift'
    }
];

app.get('/artist', function(req, res)
    {
        res.send(artist);
    }
)

app.listen(3012, function() 
{
           console.log('API app started');
})