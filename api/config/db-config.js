const mysql = require("mysql");
require('dotenv').config();

// Create connection
const db = mysql.createConnection({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_DATABASE,
	multipleStatements: true
});

// Connect
db.connect((err) => {
	if (err) {
		console.log('Connection Failed');
		throw err;
	}
	console.log('MySql Connected...');
});

module.exports = db;