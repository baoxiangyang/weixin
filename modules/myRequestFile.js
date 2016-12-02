var request = require('request'),
		fs = require('fs');
module.exports = function(url,data, file,callback){
	let r = request.post(url, function optionalCallback(err, httpResponse, body) {
		callback(err, httpResponse, body);
	});
	let form = r.form();
	form.append('media', fs.createReadStream(file.path), {filename: file.originalname});
	if(data){
		form.append('description', JSON.stringify(data));
	}
	form.append('type','image');
};