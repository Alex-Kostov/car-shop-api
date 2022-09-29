const mysql = require("mysql2");
const { createDatabase, createTables, addTestCar } = require('./db-create-tables');
require('dotenv').config();

// Create connection
const db = mysql.createConnection({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	multipleStatements: true
});

try {
	// Create Database, Table and add a test car
	createDatabase(process.env.DB_DATABASE, db);
	createTables(db);
	addTestCar(db);
} catch (err) {
	throw (err);
}

console.log('MySql Connected...');

module.exports = db;