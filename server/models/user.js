var mongoose = require('mongoose');

var User = mongoose.model('Users', {
	email: {
		type: String,
		required: true,
		trim: true,
		minlength: 2
	}
});


module.exports = {User};

/*
var newUser = new User({
	email: 'abc@gmail.com',
});


newUser.save().then((res) =>{
	console.log(JSON.stringify(res,undefined,2));
}, (e) =>{
	console.log('Unable to save todo');
});
*/
