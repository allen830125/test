let express = require('express');
let router = express.Router();

// 更新使用者資訊
router.post('/sum', (req, res) => {
    setTimeout(() => {
        let one = req.body.one;
        let two = req.body.two;
        res.json(one + two);
    }, 1);
});

module.exports = router;