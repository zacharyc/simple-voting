var express = require('express');
var app = express();

app.engine('html', require('ejs').renderFile);

app.get('/', function(req, res){
	res.render('index.html');
});

app.post('/vote/:id', function(req, res) {
	console.log('string is %d', req.params.id);
	res.render('thankyou.html');
});

app.post('*', function(req, res) {
	console.log('here');
});

var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});