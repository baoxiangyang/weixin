var express = require('express');
var router = express.Router();
var pull = require('../modules/pullCode');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/pullCode', function(req, res, next) {
  pull(function(err,stdout,stderr){
  	res.render('pullCode', { title: 'pullCode', err: err, stdout:stdout, stderr: stderr});
  })
});
module.exports = router;
