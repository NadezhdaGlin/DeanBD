const {Router} = require('express');
const router = Router();

const crypto = require('crypto')

const connection = require('./connection')
const users = require('./users')

router.get('/students/:num', (req, res) => //req - запрос, res - ответ    
{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');

    connection.query("SELECT students.name, students.surname, students.patronymic,students.stud_recbook, groups.number FROM students JOIN groups ON groups.id = students.ID_groups WHERE groups.number = " + req.params.num, (err, results, fields) => {    if (err) {
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
    res.cookie("token", crypto.randomBytes(64).toString('hex'), {maxAge: new Date().getTime() + 1000*36000});
    res.send("token=" + crypto.randomBytes(64).toString('hex'));
    // connection.query("SELECT EXISTS(SELECT id FROM table WHERE login=?, password=?)", [req.body.login, req.body.password], (err, results, fields) => {
    //     if (err) {
    //         console.log(err);
    //         res.status(503).send("Error");
    //     }
    //     else {
    //         let token = crypto.randomBytes(64).toString('hex');
    //         res.cookie("token", token, {maxAge: new Date().getTime() + 1000*36000});
    //         users[token] = req.body.login;
    //         res.send(results);
    //     }
    // });
});

router.post('/registration', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');

    connection.query("INSERT INTO registration(login, password) VALUES(?, ?)", [req.body.login, req.body.password], (err, results, fields) => {
        if (err) {
            console.log(err);
            res.status(503).send("Error");
        }
        else {
            res.send(results)
        }
    });
});

router.get('/disciplines', (req, res) => //req - запрос, res - ответ
{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');

    connection.query("SELECT id, name FROM disciplines", (err, results, fields) => {
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

