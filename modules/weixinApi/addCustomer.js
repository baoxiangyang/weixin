//添加客服接口
var request = require('request');
module.exports =  function(json, callback){
	let data = json || {
   "kf_account" : "test1@test",
   "nickname" : "客服1",
   "password" : "123456",
	};
	console.log(global.weixinToken);
	var option = {
		headers: {'Connection': 'close', 'Content-Type': 'application/json; charset=utf-8'},
		url: 'https://api.weixin.qq.com/customservice/kfaccount/add?access_token='+ global.weixinToken,
		body: data
	}
	request(option, function(err, _res, body){
		callback(err, _res, body);
	});
}