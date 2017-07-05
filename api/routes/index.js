var express 		= require('express');
var router 			= express.Router();
 

var clients 		= require('../controllers/clients.js');
var transactions 	= require('../controllers/transactions.js');
var users 			= require('../controllers/users.js');
var workouts 		= require('../controllers/workouts.js');

// clients
router.get('/clients', 			clients.all);
router.get('/client/:id', 		clients.one);
router.post('/client', 			clients.create);
router.put('/client/:id', 		clients.update);
router.delete('/client/:id', 	clients.delete);

// transactions
router.get('/transactions', 		transactions.all);
router.get('/transaction/:id', 		transactions.one);
router.post('/transaction', 		transactions.create);
router.put('/transaction/:id', 		transactions.update);
router.delete('/transaction/:id', 	transactions.delete);

// users
router.get('/users', 			users.all);
router.get('/user/:id', 		users.one);
router.post('/user', 			users.create);
router.put('/user/:id', 		users.update);
router.delete('/user/:id', 		users.delete);

// workouts
router.get('/workouts', 		workouts.all);
router.get('/workout/:id', 		workouts.one);
router.post('/workout', 		workouts.create);
router.put('/workout/:id', 		workouts.update);
router.delete('/workout/:id', 	workouts.delete);

module.exports = router;