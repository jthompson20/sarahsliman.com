var mongoose 	= require('mongoose');
var Schema 		= mongoose.Schema;
//var ObjectId 	= mongoose.Schema.Types.ObjectId;

var transaction 	= new Schema({
	merchant: 		String,
	product: 		String,
	amount: 		Number,
	request: 		String,
	response: 		String,
	success: 		{ type: Number, default: 0 }
});

module.exports 	= mongoose.model('Transaction',transaction);