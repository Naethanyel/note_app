var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use('/assets', express.static(__dirname + '/public'));

app.get('/', function(req, res) { //req is request res is response
	
	res.render('index');
	
});

app.listen(port);