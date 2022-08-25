const express = require('express');
const mysql = require('mysql');

// Get the data from .env file (not in the repo).
require('dotenv').config();

const app = express();
const port = process.env.PORT;

// Create connection
const db = mysql.createConnection({
	host: process.env.HOST,
	user: process.env.USER,
	password: process.env.PASSWORD,
	database: 'car_shop_api'
});

// Connect
db.connect((err) => {
	if (err) {
		throw err;
	}
	console.log('MySql Connected...');
});

// Create Database
app.get('/create_database', (req, res) => {
	const sql = 'CREATE DATABASE car_shop_api';
	db.query(sql, (err, result) => {
		if (err) {
			throw err;
		}
		console.log(result);
		res.status(200).send('Database created...');
	});
});

// Create table
app.get('/create_table_cars', (req, res) => {
	const sql = 'CREATE TABLE cars(id int AUTO_INCREMENT, make VARCHAR(255), model VARCHAR(255), PRIMARY KEY (id))';
	db.query(sql, (err, result) => {
		if (err) {
			throw err;
		}
		console.log(result);
		res.status(200).send('Cars table created...');
	});
})

// Insert test car
app.get('/add_test_car', (req, res) => {
	const car = {
		make: 'Audi',
		model: 'A3',
	};
	const sql = 'INSERT INTO cars SET ?';
	const query = db.query(sql, car, (err, result) => {
		if (err) {
			throw err;
		}
		console.log(result);
		res.status(200).send('Test Car added');
	});
});

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

app.listen(port, () => {
	console.log('Server is up on port ' + port);
});