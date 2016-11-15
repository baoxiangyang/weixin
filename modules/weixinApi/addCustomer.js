//添加客服接口
var request = require('request');
module.exports =  function(json, callback){
	let data = json || {
   "kf_account" : "test1@test",
   "nickname" : "客服1",
   "password" : "123456",
	};
	console.log(global.weixinToken);
	request.post('https://api.weixin.qq.com/customservice/kfaccount/add?access_token='+ global.weixinToken.access_token, {'form':data}, function(err,httpResponse,body){
		if(err){
			callback(err)
		}else{
			callback(null, body);
		}
	})
}