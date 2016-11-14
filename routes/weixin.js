var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(req.query.echostr);
});
router.post('/', function(req, res, next) {
	console.log(req.bodyXml);
});

module.exports = router;
