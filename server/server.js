var {mongoose} = require('./db/mongoose');

//mongoose model
//mongoose validators


var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//middleware
app.use(bodyParser.json());

app.post('/todos', (req, res) => {
	//console.log(req.body);
	var todo =new Todo({
		text: req.body.text
	});

	todo.save().then( (doc) => {
		res.send(doc);
	}, (e) => {
		res.status(400).send(e);
	});
});

app.listen(3000, () => {
	console.log('Started on port 3000.');
});

/*
Create --> Post HTPP Req
(send json with text body  to server, the complete text setup on server with id is returned to user in json format)
*/






