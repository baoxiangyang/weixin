//post数据接口
var request = require('request');
module.exports =  function(url, method, data, callback){
	if(method == 'POST'){
		request.post(url, {'form':data}, function(error,httpResponse,body){
			callback(error,httpResponse, body);
		})
	}else{
		request(url, function (error, response, body) {
		 callback(error,httpResponse, body);
		})
	}
}