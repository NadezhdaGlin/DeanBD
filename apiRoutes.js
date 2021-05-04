const {Router} = require('express');
const router = Router();

router.get("/someData", (req, res) => {
    console.log("Кто-то стучит в api");
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');

    res.send([
        {
            surname: "Иванов",
            name: "Петр",
            patronymic: "Иванович",
            stud_recbook: "15 = ПМ = ФЫ",
            ID_groups: "4",
            teams_number: "",
        }
    ]);
});

module.exports = router;
