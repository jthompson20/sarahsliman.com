var mongoose 	= require('mongoose');
var Schema 		= mongoose.Schema;
//var ObjectId 	= mongoose.Schema.Types.ObjectId;

var user 	= new Schema({
	name: 			String,
	email: 			String,
	password: 		String,
	active: 		{ type: Number, default: 1 }
});

module.exports 	= mongoose.model('User',user);