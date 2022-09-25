const mysql = require("mysql");
const { createDatabase, createTables, addTestCar } = require('./db-create-tables');
require('dotenv').config();

// Create connection
const db = mysql.createConnection({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	multipleStatements: true
});

// Defining globals that we use in the models.
global.globalDbName = process.env.DB_DATABASE;
global.globalTableName = 'cars';

// Connect
db.connect((err) => {
	if (err) {
		console.log('Connection Failed');
		throw err;
	}

	// Create Database, Table and add a test car
	createDatabase(process.env.DB_DATABASE, db);
	createTables(process.env.DB_DATABASE, 'cars', db);
	addTestCar(process.env.DB_DATABASE, 'cars', db);

	console.log('MySql Connected...');

});

module.exports = db;