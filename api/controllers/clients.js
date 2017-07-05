var Client 	= require('../models/client');

var clients 	= {
	all: 			function(req,res){
		Client.find({},function(err,obj){
			if (err){
				res.status(500).send({error:"Could not retrieve objects"});
			} else {
				res.send(obj);
			}
		});
	},
	one: 			function(req,res){
		Client.find({_id:req.params.id}).exec(function(err,obj){
			if (err) {
				res.status(500).send({error: "Could not retrieve object"});
			} else {
				res.send(obj);
			}
		});
	},
	create: 		function(req,res){
		var request 	= new Client(req.body);

		// save mongo object
		request.save(function(err,obj){
			if (err){
				res.status(500).send({error:"Could not save object"});
			} else {
				res.send(obj);
			}
		});
	},
	update: 		function(req,res){
		Client.findByIdAndUpdate(req.params.id, { $set: req.body }, function (err, obj) {
			if (err) {
				res.status(500).send({error: "Error updating obj"});
			} else {
				res.send(obj);
			}
		});
	},
	delete: 		function(req,res){
		Client.find({_id: req.params.id}).remove().exec(function(err,obj){
			if (err) {
				res.status(500).send({error: "Error deleting obj"});
			} else {
				res.send(obj);
			}
		});
	},
};

module.exports 	= clients;


