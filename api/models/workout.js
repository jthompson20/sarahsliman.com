var mongoose 	= require('mongoose');
var Schema 		= mongoose.Schema;
//var ObjectId 	= mongoose.Schema.Types.ObjectId;

var workout 	= new Schema({
	name: 			{ type: String, index: true },
	description: 	String,
	video: 			String,
	audio: 			String,
	year: 			{ type: Number, default: 2017, index: true },
	month: 			{ type: Number, index: true},
	week: 			{ type: Number, default: 1, index: true },
	order: 			{ type: Number, default: 0, index: true }
});

module.exports 	= mongoose.model('Workout',workout);