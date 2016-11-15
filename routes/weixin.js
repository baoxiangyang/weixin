var express = require('express');
var router = express.Router();
var sendXml = require('../modules/sendXml.js');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(req.query.echostr);
});
router.post('/', function(req, res, next) {
	console.log(req.bodyXml);
	var json = {};
	json.ToUserName = req.bodyXml.FromUserName;
	json.CreateTime = new Date().getTime();
	json.MsgType = 'text';
	json.Content = '你是';
	console.log(json);
	sendXml(res,json)
});

module.exports = router;
