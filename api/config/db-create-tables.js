
/**
 * Creates DATABASE if one does not exist.
 * @param {string} db_name Name of the database.
 * @param {*} db Database connection.
 */
exports.createDatabase = (db_name, db) => {
	const sql = 'CREATE DATABASE IF NOT EXISTS ' + db_name;
	db.query(sql, (err, result) => {
		if (err) {
			throw err;
		}
		console.log('Database Created...');
	});
}

/**
 * Creates Table in the database that is passed
 * If the table exist nothing happens
 * @param {string} db_name Name of the database
 * @param {*} tableName Name of the table
 * @param {*} db Database connection
 */
exports.createTables = (db_name, tableName, db) => {
	const sql = `CREATE TABLE IF NOT EXISTS ${db_name}.${tableName}(
		id int AUTO_INCREMENT,
		make CHAR(255),
		model CHAR(255),
		year INT(4),
		price INT(255),
		transmission CHAR(255),
		engine_type CHAR(255),
		type CHAR(255),
		PRIMARY KEY (id)
	)`;
	db.query(sql, (err, result) => {
		if (err) {
			throw err;
		}
		console.log(tableName + ' table created...');
	});
}

/**
 * Ads one test car into the passed table
 * If the table has cars the function does nothing
 * @param {*} db_name Database Name
 * @param {*} tableName Table Name
 * @param {*} db Database connection
 */
exports.addTestCar = (db_name, tableName, db) => {
	db.query(`SELECT EXISTS (SELECT 1 FROM ${db_name}.${tableName});`, (err, result, fields) => {
		if (err) {
			throw err;
		}
		if (Object.values(result[0])[0] === 1) {
			console.log('Test car has not been added since it already exist.');
		} else {
			const car = {
				make: 'audi',
				model: 'a3',
				year: 2009,
				price: 11000,
				transmission: 'mt6',
				engine_type: 'diesel',
				type: 'hatchback'
			};
			const sql = `INSERT INTO ${db_name}.${tableName} SET ?`;
			db.query(sql, car, (err, result) => {
				if (err) {
					throw err;
				}
				console.log('Test Car added');
			});
		}
	});
}
