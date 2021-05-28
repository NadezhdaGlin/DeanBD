const {Router} = require('express');
const router = Router();
const connection = require('./connection')

router.get('/students', (req, res) => //req - запрос, res - ответ    
{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
    connection.query("SELECT students.name, students.surname, students.patronymic,students.stud_recbook, groups.number FROM students JOIN groups ON groups.id = students.ID_groups WHERE groups.number = 11", (err, results, fields) => {
        if (err) {
            console.log(err);
            res.status(503).send("Error");
        }
        else {
        res.send(results)
        }
    });
});

router.get('/groups', (req, res) => //req - запрос, res - ответ    
{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
    connection.query("SELECT id, number FROM groups", (err, results, fields) => {
        if (err) {
            console.log(err);
            res.status(503).send("Error");
        }
        else {
        res.send(results)
        }
    });
});

router.post('/authorization', (req, res) => //req - запрос, res - ответ
{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
    connection.query("INSERT INTO registration(login, password) VALUES(?, ?)", (err, results, fields) => {
        if (err) {
            console.log(err);
            res.status(503).send("Error");
        }
        else {
            res.send(results)
        }
    });
});


module.exports = router;
