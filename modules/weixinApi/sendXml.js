var xml2js = require('xml2js'),
		builder = new xml2js.Builder();
module.exports = function(res, data, callBack){
	if(!data || !Object.keys(data).length){
		res.send('success');
	}else{
		data.FromUserName = 'gh_6fa0c2480549';
		let xml = builder.buildObject({'xml': data});
		res.send(xml);
	}
	if(callBack) callBack();
};