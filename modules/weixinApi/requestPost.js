//post数据接口
var request = require('request');
module.exports =  function(url, data, callback){
	request.post(url, {'form':data}, function(err,httpResponse,body){
		callback(err,httpResponse, body)
	})
}