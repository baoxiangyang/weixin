var express = require('express'),
		router = express.Router(),
		pull = require('../modules/pullCode'),
 		querystring = require('querystring');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
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
 	if(req.body.method == 'POST'){
	
 	}else{
 		let url = req.body.url + ;
		if(req.body.token){

		}else{

		}
 	}
});
module.exports = router;
