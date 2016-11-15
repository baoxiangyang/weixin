var express = require('express');
var router = express.Router();
var sendXml = require('../modules/weixinApi/sendXml.js');
var addCustomer = require('../modules/weixinApi/addCustomer.js');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(req.query.echostr);
});
router.get('/addCustomer', function(req, res, next) {
  addCustomer(null, function(err,body){
  	res.send(body);
  })
});
router.post('/', function(req, res, next) {
	console.log('reqBody' + req.bodyXml);
	let json = {};
	json.ToUserName = req.bodyXml.FromUserName;
	json.CreateTime = new Date().getTime();
	json.MsgType = 'text';
	json.Content = '你是sb';
	sendXml(res, json)
});

module.exports = router;
