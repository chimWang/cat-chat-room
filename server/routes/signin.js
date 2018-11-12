var express = require('express');
var router = express.Router();

var user = {}
router.get('/', function (req, res, next) {
    res.sendfile('views/index.html');
});

router.post('/', function (req, res, next) {
    if (user[req.cookies.name]) {
        //用户名存在，不允许登录
        res.redirect('/signin')
    } else {
        //用户名不存在，把用户名存入cookie并跳转主页
        res.cookie("user", req.body.name,{ maxAge: 1000 * 60 * 60 * 24 * 30 })
        res.redirect('/')
    }
})

module.exports = router