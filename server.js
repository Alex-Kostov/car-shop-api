const express = require('express');
const app = express();
// Get the data from .env file (not in the repo).
require('dotenv').config();
const port = process.env.PORT || 4000;

app.use(express.json());

app.get('/', (req, res) => {
	res.send('Hello World');
});

const carsRoutes = require('./api/routes/cars.router');

app.use('/api/cars', carsRoutes);

// Listen for Request
app.listen(port, () => {
	console.log('Server is up on port ' + port);
});

/*

// Select cars
app.get('/get_cars', (req, res) => {
	const sql = 'SELECT * FROM cars';
	const query = db.query(sql, (err, results) => {
		if (err) {
			throw err;
		}
		console.log(results);
		res.status(200).send('Cars fetched...');
	});
});

// Select car by ID
app.get('/get_car/:id', (req, res) => {
	const sql = 'SELECT * FROM cars WHERE id = ' + req.params.id;
	const query = db.query(sql, (err, results) => {
		if (err) {
			throw err;
		}
		console.log(results);
		res.status(200).send('Car fetched...');
	});
});

// Update car
app.get('/update_car/:id', (req, res) => {
	const newModel = 'a5';
	const sql = `UPDATE cars SET model = '${newModel}' WHERE id = ${req.params.id}`;
	const query = db.query(sql, (err, results) => {
		if (err) {
			throw err;
		}
		console.log(results);
		res.status(200).send('Car updated...');
	});
});

// Delete car
app.get('/delete_car/:id', (req, res) => {
	const sql = 'DELETE FROM cars WHERE id = ' + req.params.id;
	const query = db.query(sql, (err, results) => {
		if (err) {
			throw err;
		}
		console.log(results);
		res.status(200).send('Car deleted...');
	});
});

*/