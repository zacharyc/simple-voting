var express = require('express');
var app = express();

app.engine('html', require('ejs').renderFile);

var votes = [
	{ key: 1, text: 'Four Different houses', votes : 0},
	{ key: 2, text: 'Competed in Sailing', votes : 0},
	{ key: 3, text: 'Held back in first grade', votes : 0},
	{ key: 4, text: 'Learned to drive on a defender', votes : 0},
	{ key: 5, text: 'Brother of Sigma Nu', votes : 0}
];

app.get('/', function(req, res){
	res.render('index.html', {votes: votes});
});

app.get('/results', function(req, res) {
	res.render('results.html', {votes: votes});
});


app.post('/vote/:id', function(req, res) {
	console.log('string is %d', req.params.id);
	
	votes[req.params.id - 1].votes += 1;
	res.render('thankyou.html');
});


var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});