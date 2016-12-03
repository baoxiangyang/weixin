var express = require('express'),
		router = express.Router(),
		pull = require('../modules/pullCode'),
 		querystring = require('querystring'),
 		myRequest = require('../modules/myRequest.js'),
 		myRequestFile = require('../modules/myRequestFile.js'),
 		fs = require('fs');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '小包总的网站'});  
});
router.get('/postData', function(req, res, next) {
  res.render('postData', { title: '调用微信接口' });
});
router.get('/pullCode', function(req, res, next) {
  pull(function(err,stdout,stderr){
  	res.render('pullCode', { title: 'pullCode', err: err, stdout:stdout, stderr: stderr});
  });
});
router.post('/postData', function(req, res, next) {
	let url = req.body.url;
 	if(req.body.method == 'POST'){
		if(req.body.token){
	 		url +='access_token=' + global.weixinToken.access_token;
	 	}
	 	myRequest(url, req.body.method, req.body.postData, function(err, _res, body){
	 		res.send({err:err, body:body, _res: _res});
	 	});
 	}else{
 		if(Object.keys(req.body.postData).length){
 			url += querystring.stringify(req.body.postData);
 			if(req.body.token){
 				url += '&access_token=' + global.weixinToken.access_token;
 			}
 		}else{
 			if(req.body.token){
 				url += 'access_token=' + global.weixinToken.access_token;
 			}
 		}
 		myRequest(url, req.body.method, null, function(err, _res, body){
	 		res.send({err:err, body:body, _res: _res});
	 	});
 	}	
});
router.post('/postFile', function(req, res, next) {
	let url = req.body.url + '?&access_token=' + global.weixinToken.access_token;
	let json = null;
	if(req.body.type == 'video'){
  	json = {
  		title: req.body.title,
  		introduction: req.body.introduction
  	};
  }
  myRequestFile(url, json, req.files[0], function(err, _res, body){
  	fs.unlinkSync(req.files[0].path);
  	res.send({
  		err:err,
  		_res: _res,
  		body:body
  	});
  });
});
module.exports = router;
