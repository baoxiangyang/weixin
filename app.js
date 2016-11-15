var https = require('https');
var fs = require('fs');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var xmlParser = require('./modules/xmlParser.js');
var weixinToken = require('./modules/weixinApi/accessToken');
var index = require('./routes/index');
var weixin = require('./routes/weixin');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', index);
app.use('/weixin', xmlParser, weixin);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
https.createServer({key:fs.readFileSync('./config/key.pem'), 
  cert:fs.readFileSync('./config/key-cert.pem')}, app).listen(443, function(){
	/*weixinToken();
	setInterval(function(){
		weixinToken();
	}, 6600000);*/
  global.weixinToken = {};
  global.weixinToken.access_token = "bfGxe-aKauQd0QiUUVlzmikZmjDRg5YKTCRh2e-TAytqwF2qRfy7WHn2GnCedGVZOZ9RptnWAGTzEmw3n2jDLF5_e6vhb7FH71EVDnh6ExkqNqVZqxNKRpNIksYeaTT_JXUfAEAPDA"
});
module.exports = app;
