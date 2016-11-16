var sendXml = require('../../modules/weixinApi/sendXml.js');
module.exports = function(req, res, next){
	let json = {};
	json.ToUserName = req.bodyXml.FromUserName;
	json.CreateTime = new Date().getTime();
	json.MsgType = 'text';
	json.Content = 'hello SB!!!';
	sendXml(res, json);
};