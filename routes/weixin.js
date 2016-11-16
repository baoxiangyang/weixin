let express = require('express'),
		router = express.Router(),
    sendXml = require('../modules/weixinApi/sendXml.js'),
    eventRouter = require('./weixinRouter/eventRouter.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(req.query.echostr);
});
router.post('/', function(req, res, next) {
	console.log(req.bodyXml);
	switch (req.bodyXml.MsgType){
		case 'event' :
			eventRouter(req, res, next);
			break;
		case 'text':
			let json = {};
			json.ToUserName = req.bodyXml.FromUserName;
			json.CreateTime = new Date().getTime();
			json.MsgType = 'text';
			json.Content = '你是sb';
			sendXml(res, json);
			break;
		default:
			res.send('success');
	}
	
});

module.exports = router;
