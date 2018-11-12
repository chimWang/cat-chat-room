var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function (req, res, next) {
  if (req.cookies.user == null) {
    res.redirect('/signin');
  } else {
    res.sendfile('views/index.html');
  }
});

module.exports = router;
