var xml2js = require('xml2js'),
		builder = new xml2js.Builder();
module.exports = function(res, data, callBack){
	if(!data || !Object.keys(data).length){
		res.send('success');
	}else{
		data.FromUserName = 'B-XY9301'
		let xml = builder.buildObject({'xml': data});
		let str = '<xml><ToUserName><![CDATA[oZz9bw6wDYpBlZUde8gqHa--tWoU]]</ToUserName>'+
'<CreateTime>'+new Date().getTime()+'</CreateTime>'+
'<MsgType><![CDATA[text]]</MsgType><Content><![CDATA[sbsbs]]</Content><FromUserName><![CDATA[B-XY9301]]</FromUserName></xml>';
		res.send(str);
	}
	if(callBack) callBack();
};