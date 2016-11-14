var xml2js = require('xml2js');
module.exports = function(req, res, next){
	if(req.headers['content-type'] == 'text/xml'){
		let xmlStr = '';
		req.on('data', function(chunck){
			xmlStr += chunck;
		});
		req.on('end', function(){
			xml2js.parseString(xmlStr, { explicitArray : false, ignoreAttrs : true }, function(err, data){
				if(err){
					console.log('xml body Parser fail');
					console.log(err);
				}else{
					req.bodyXml = data.xml;
				}
				next();
			});
		})
	}else{
		next();
	}
};