var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express', address: process.env.VIRTUAL_HOST || 'http://localhost:3000' });
});

module.exports = router;