const {Router} = require('express');
const router = Router();

router.get("/someData", (req, res) => {
    res.status(404).json({"status": "Все заебися"});
});

module.exports = router;
