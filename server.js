const express = require('express');

var app = express();

app.use(express.static(__dirname + '/public'));


app.get('/', (req, res) => {
	res.send('<h1>Hello Expressssssssssssssss..</h1>');
});

app.listen(3000);