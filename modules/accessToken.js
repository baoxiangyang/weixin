//获取微信accessToken
var request = require('request'),
		querystring = require('querystring'),
		data = {
			grant_type: 'client_credential',
			appid: 'wxba6005f1e61bdfaa',
			secret: 'a98e01d09e1b5ade00c9f928839ffbae'
		};
module.exports = function(callback){
	var arg = arguments;
	request.get('https://api.weixin.qq.com/cgi-bin/token?'+querystring.stringify(data),function(err,_res,body){
		var json = JSON.parse(body);
		json.refreshTime = new Date();
		console.log(body);
		if(json.error){
			global.weixinToken = {};
			if(callback) callback(json);
		}else{
			global.weixinToken = json;
			if(callback) callback();
		}
	}).on('error', function(err){
		console.log('get access token fail!');
		if(callback) callback(err);
	})
}
