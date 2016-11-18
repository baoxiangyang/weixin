var sendXml = require('../../modules/weixinApi/sendXml.js');
module.exports = function(req, res, next){
	let json = {};
	json.ToUserName = req.bodyXml.FromUserName;
	json.CreateTime = new Date().getTime();
	json.MsgType = 'news';
	json.ArticleCount =  1;
	json.Articles = {};
	json.Articles.item = {
		Title: '小包总',
		Description: '支持小包总',
		PicUrl: 'http://mmbiz.qpic.cn/mmbiz_jpg/YBFfQzKkqhvgxMqFRhS9m9ByFLvnJwicvSlK38wMp7L5fOqJr3MrJdHtX2E78vnUnLHHibLPKTbhvqlpZmTyeanA/0?wx_fmt=jpeg',
		Url: 'http:103.214.169.137/'
	};
	//json.Content = 'hello SB!!!';
	sendXml(res, json);
};