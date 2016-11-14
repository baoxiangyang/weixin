var child_process  = require('child_process');
var path = require('path');
module.exports = function(callback){
	let url = path.resolve(__dirname, '../config/pull.bat');
	child_process.execFile(url, null, {cwd:__dirname}, function (error,stdout,stderr) {
		callback(error,stdout,stderr);
	});	
}
