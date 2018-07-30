let express = require('express');
let router = express.Router();

// 更新使用者資訊
router.post('/sum', (req, res) => {
    setTimeout(() => {
        let one = Number(req.body.one);
        let two = Number(req.body.two);
        let sum = one + two;
        res.json({success: true, errorMs: "", data: sum});
    }, 500);
});

module.exports = router;